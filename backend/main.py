from fastapi import FastAPI

import auth.routers, article.routers
from core.database import init_db, close_db

app = FastAPI(
    title="API du site",
    summary="------------ Backend du site de VICE TOGO ------------.",
)


@app.on_event("startup")        #initialisation de la base de données
async def startup(): 
    await init_db(app)

app.include_router(auth.routers.router)     #pas besoin de prefix, FastAPI n'en supporte ppas
app.include_router(article.routers.router, prefix="/article")


@app.on_event("shutdown")       #fermerture de la connexion
async def shutdown():
    await close_db(app)