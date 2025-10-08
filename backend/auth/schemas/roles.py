from pydantic import BaseModel, Field
from enum import Enum

class DroitEnum(Enum):
    CONFIGURER_SITE = "configurer le site"
    PUBLIER_ANNONCES = "publier des annonces"
    SUPPRIMER_ANNONCES = "supprimer des annonces"

class Role(BaseModel):
    id: str
    name: str = Field(...)