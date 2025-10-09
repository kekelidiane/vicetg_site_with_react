import os
from dotenv import load_dotenv
from gino import Gino
from pydantic_settings import BaseSettings
from fastapi import FastAPI

load_dotenv()                       # Charger les variables d'environnement depuis .env

db = Gino()                         # Initialiser la base de données avec Gino

class Settings(BaseSettings):
    DATABASE_URL: str = os.getenv("DATABASE_URL")

# Charger les paramètres
settings = Settings()

DATABASE_URL = settings.DATABASE_URL

# Iinitialisation de la base de données
async def init_db(app: FastAPI):
    await db.set_bind(DATABASE_URL)             # Attacher la base de données à l'application FastAPI
    await db.gino.create_all()              # Créer toutes les tables dans la base de données
    app.state.db = db

async def close_db(app: FastAPI):           # Fonction de fermeture de la connexion à la base de données
    await db.pop_bind().close()

# plus besoin de sessionmaker ou de AsyncSession, car Gino gère tout cela.