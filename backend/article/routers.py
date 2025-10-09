from datetime import datetime
from fastapi import APIRouter, Depends, File, HTTPException, UploadFile, status

from . import schemas, models

router = APIRouter()

MAX_FILE_SIZE_MB = 100  # Taille maximale du fichier en Mo

@router.post(
    '/',
    response_model=schemas.Article,
    status_code=status.HTTP_200_OK,
    response_model_by_alias=True,
    response_description="Article créé avec succès"
)
async def create_article(article: schemas.ArticleCreate):
    new_article = await models.Article.create(
        title=article.title,
        author=article.author,
        content=article.content,
        source=article.source or "Unknown",
        date=(article.date or datetime.now()).replace(tzinfo=None)
    )
    return new_article

    

@router.get(
    '/',
    status_code=status.HTTP_200_OK,
    response_model_by_alias=True,
    response_description="Articles récupérés"
)
async def get_articles():
    articles = await models.Article.query.gino.all()
    return articles


@router.put(
    "/{id}",
    response_model=schemas.Article,
    status_code=status.HTTP_200_OK,
    response_model_by_alias=True,
    response_description="Article mis à jour"
)
async def update_article(id_article: int, article: schemas.ArticleUpdate):
    # Récupérer l'article à mettre à jour
    old_article = await models.Article.get(id_article)

    if old_article is None:
        raise HTTPException(status_code=404, detail="Article introuvable")

    # Mettre à jour les champs de l'article
    await old_article.update(**article.model_dump(exclude_unset=True)).apply()

    return old_article

@router.delete(
    "/{id}",
    status_code=status.HTTP_200_OK,
    response_description="Article supprimé !"
)
async def delete_article(id: int):
    # Récupérer l'article à supprimer
    old_article = await models.Article.get(id)

    if not old_article:
        raise HTTPException(status_code=404, detail=f"Article avec ID {id} introuvable")

    await old_article.delete()

    return {"detail": "Article supprimé avec succès"}

    

#Ancienne fonction potentiellement la cause d'erreurs donc à revoir
'''
async def create_article(
    article: schemas.ArticleCreate, 
    files: List[UploadFile] = File(...), 
    db: Session = Depends(get_db)
):
    file_urls = []

    def validate_file(file: UploadFile):
        file.file.seek(0, os.SEEK_END)
        file_size_mb = file.file.tell() / (1024 * 1024)
        if file_size_mb > MAX_FILE_SIZE_MB:
            raise HTTPException(status_code=400, detail="Fichier trop volumineux.")
        
        if not file.content_type.startswith(('image/', 'video/')):
            raise HTTPException(status_code=400, detail="Le fichier doit être une image ou une vidéo.")
        
        file.file.seek(0)

    for file in files:
        validate_file(file)
    
        file_location = f"files/{file.filename}"
        os.makedirs(os.path.dirname(file_location), exist_ok=True)

        with open(file_location, "wb") as f:
            f.write(file.file.read())
        file_urls.append(file_location)
        file.file.seek(0)

    new_article = crud.create_article(db, article, file_urls)
    
    return new_article

'''