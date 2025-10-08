from datetime import timedelta
from typing import Annotated
from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm

from auth.functions import (
    ACCESS_TOKEN_EXPIRE_MINUTES,
    oauth2_scheme,
    authenticate_user,
    expire_token,
    create_access_token,
    get_current_active_user,
    get_current_user,
    hash_password,
    is_token_expired,
    save_token,
    verify_password,
)
from auth.schemas.token import Token
from auth.schemas.user import UserCreate, User, UserUpdate
from auth.models import TokenModel, UserModel


router = APIRouter()


@router.post("/register")
async def register(user: UserCreate):
    try:
        if user.password != user.confirm_password:
            raise HTTPException(status_code=400, detail="Les mots de passe ne correspondent pas")
    except Exception as e:
        print(f"Erreur lors de la vérification du mot de passe: {str(e)}")

    hashed_password = hash_password(user.password)

    existing_user = await UserModel.query.where(UserModel.username == user.username).gino.first()       # verifie si le username existe déjà
    try:
        if existing_user:
            return {"msg": "Cet utilisateur existe déjà", "error": "username_exists"}
    except Exception as e:
        print(f"Erreur lors de la vérification de l'email: {str(e)}")
        return {"msg": "Erreur, cet utilisateur existe deja"}
    
    try:
        existing_email = await UserModel.query.where(UserModel.mail == user.mail).gino.first()          # verifie si l'email existe déjà
        if existing_email:
            return {"msg": "Cet email existe déjà", "warning": "email_exists"}
    except Exception as e:
        print(f"Erreur lors de la vérification de l'email: {str(e)}")
        return {"msg": "Erreur, cet email existe deja"}

    new_user = await UserModel.create(          # créé l'utilisateur si tout est OK

        username=user.username,
        full_name=user.full_name,
        mail=user.mail,
        phone=user.phone,
        address=user.address,
        hashed_password=hashed_password
    )
    
    return {"msg": "Utilisateur créé avec succès", "User": new_user}

@router.put("/update-user", response_model=User)
async def update_user(
    user_update: UserUpdate,
    current_user: Annotated[User, Depends(get_current_active_user)]
):
    old_user = await UserModel.query.where(UserModel.username == current_user.username).gino.first()          # verifie si l'utilisateur existe deja
    if not old_user:
        raise HTTPException(status_code=404, detail="Utilisateur non trouvé")
    
    if user_update.password and user_update.confirm_password:
        if user_update.password != user_update.confirm_password:
            raise HTTPException(status_code=400, detail="Les mots de passe ne correspondent pas")
        
        if not verify_password(user_update.old_password, old_user.hashed_password):     # verifie l'ancien mot de passe
            raise HTTPException(status_code=400, detail="L'ancien mot de passe est incorrect")

        hashed_password = hash_password(user_update.password)               # hash le nouveau mot de passe
        old_user.hashed_password = hashed_password

# mise à jour des autres informations de l'user
    if user_update.full_name:
        old_user.full_name = user_update.full_name

    if user_update.email:
        # on verifie si l'email est déjà utilisé par un autre utilisateur
        existing_email = await UserModel.query.where(UserModel.mail == user_update.email).gino.first()
        if existing_email and existing_email.id != old_user.id:
            raise HTTPException(status_code=400, detail="Cet email est déjà utilisé")
        old_user.email = user_update.email

    if user_update.phone:
        old_user.phone = user_update.phone

    if user_update.address:
        old_user.address = user_update.address

    await old_user.update(
        full_name=old_user.full_name,
        mail=old_user.mail,
        phone=old_user.phone,
        address=old_user.address,
        hashed_password=old_user.hashed_password,
    ).apply()

    return {"msg": "Informations mises à jour", "user": old_user}

@router.post("/token", response_model=Token)
async def login_for_access_token(
    form_data: Annotated[OAuth2PasswordRequestForm, Depends()]
):
    user = await authenticate_user(form_data.username, form_data.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Nom d'utilisateur ou mot de passe incorrect",
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    # Crée un token JWT
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.username}, expires_delta=access_token_expires
    )
    
    # Enregistre le token dans la base de données
    await save_token(token=access_token, expires_at=access_token_expires)
    
    return Token(access_token=access_token, token_type="bearer")

""" 
la route suivante vérifie si un token JWT est valide et non expiré.
            le token doit être fourni dans l'en-tête `Authorization` sous la forme `Bearer <token>`.
"""
@router.get("/verify-token", response_model=Token,  summary="Vérifie la validité du token")
async def verify_token(token: Annotated[str, Depends(oauth2_scheme)]):
    if not token:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Token JWT manquant. Veuillez inclure un token JWT valide dans l'en-tête `Authorization: Bearer <token>`",
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    if await is_token_expired(token):           # verifie si le token existe et n'est pas expiré
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Token expiré ou non valide",
            headers={"WWW-Authenticate": "Bearer"},
        )

    try:
        current_user = await get_current_user(token)
    except HTTPException as e:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Impossible de valider l'utilisateur",
            headers={"WWW-Authenticate": "Bearer"},
        ) from e

    try:            # verifie si l'utilisateur est actif
        active_user = await get_current_active_user(current_user)
    except HTTPException as e:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Utilisateur inactif",
        ) from e
    
    return active_user
    

@router.post("/logout")
async def logout(
    current_user: Annotated[User, Depends(get_current_user)],
    token: Annotated[str, Depends(oauth2_scheme)]
):
    # Vérifie si le token est encore valide
    if await is_token_expired(token):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Token expiré")
    
    await expire_token(token)   #invalide le token pour deconecter l'user
    return {"msg": "Déconnexion réussie"}


@router.get("/users/me")
async def read_users_me(
    current_user: Annotated[User, Depends(get_current_active_user)]
):
    return current_user

@router.post("/refresh-token", response_model=Token)
async def refresh_token(
    current_user: Annotated[User, Depends(get_current_active_user)]
):
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": current_user.username}, expires_delta=access_token_expires
    )
    return Token(access_token=access_token, token_type="bearer")
