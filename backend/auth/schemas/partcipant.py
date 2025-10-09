from pydantic import BaseModel, EmailStr, Field

from models import User


class Participant(User):
    profession: str

    class Config:
        from_attributes = True