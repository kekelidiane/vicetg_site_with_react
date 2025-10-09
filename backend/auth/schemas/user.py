from pydantic import BaseModel, EmailStr, Field
from typing import List, Optional


class User(BaseModel):
    username: str
    full_name: str = Field(...)
    email: EmailStr = Field(...)
    phone: str
    address: str

class UserCreate(User): 
    password: str = Field(...)
    confirm_password: str = Field(...)

class UserUpdate(BaseModel):
    username: Optional[str] = None
    full_name: Optional[str] = None
    email: Optional[EmailStr] = None
    phone: Optional[str] = None
    address: Optional[str] = None
    old_password: Optional[str] = None
    password: Optional[str] = None
    confirm_password: Optional[str] = None


class UserInDB(User):
    hashed_password: str

    class Config:
        from_attributes = True