from datetime import datetime, timedelta, timezone
import os
from typing import Annotated
import jwt
from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from jwt.exceptions import InvalidTokenError, ExpiredSignatureError
from passlib.context import CryptContext

from auth.schemas.token import TokenData
from auth.schemas.user import User, UserInDB
from auth.models import TokenModel, UserModel

# fake_users_db = {
#     "johndoe": {
#         "username": "johndoe",
#         "full_name": "John Doe",
#         "email": "johndoe@example.com",
#         "hashed_password": "$2b$12$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36WQoeG6Lruj3vjPGga31lW",
#         "disabled": False,
#     }
# }

SECRET_KEY: str = os.getenv("SECRET_KEY")
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

# Hash le mot de passe
def hash_password(password: str):
    return pwd_context.hash(password)

# verifie le mot de passe
def verify_password(plain_password: str, hashed_password: str):
    return pwd_context.verify(plain_password, hashed_password)

async def get_user(username: str):
    return await UserModel.query.where(UserModel.username == username).gino.first()

async def authenticate_user(username: str, password: str):  #pour s'authentifier
    user = await get_user(username)
    try:
        if not user or not verify_password(password, user.hashed_password):
            return False
        return user
    except Exception as e:
        print(f"Erreur lors de l'authentification : {str(e)}")
        return False


# genere le JWT token
def create_access_token(data: dict, expires_delta: timedelta | None = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.now(timezone.utc) + expires_delta
    else:
        expire = datetime.now(timezone.utc) + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt


# Gestion des tokens stockés avec la bd
async def save_token(token: str, expires_at: timedelta):
    expiration_date = datetime.utcnow() + expires_at
    await TokenModel.create(token=token, expires_at=expiration_date)

async def is_token_expired(token: str) -> bool:     # token est expiré ou n'existe pas
    token_entry = await TokenModel.query.where(TokenModel.token == token).gino.first()

    if not token_entry or token_entry.expires_at < datetime.utcnow():
        return True  
    
    return False

async def expire_token(token: str):
    token_entry = await TokenModel.query.where(TokenModel.token == token).gino.first()
    if token_entry:
        await token_entry.delete()


async def get_current_user(token: Annotated[str, Depends(oauth2_scheme)]):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Impossible de valider les informations d'identification",
        headers={"WWW-Authenticate": "Bearer"},
    )
    
    if await is_token_expired(token):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Token expiré",
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("sub")
        if username is None:
            raise credentials_exception
        token_data = TokenData(username=username)
    except ExpiredSignatureError:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Token expiré",
            headers={"WWW-Authenticate": "Bearer"},
        )
    except InvalidTokenError:
        raise credentials_exception

    user = await get_user(username=token_data.username)
    if user is None:
        raise credentials_exception

    return user

async def get_current_active_user(current_user: Annotated[UserInDB, Depends(get_current_user)]):
    try:
        if current_user:
            return current_user
    except Exception as e:
        raise HTTPException(status_code=400, detail="Utilisateur inactif")

