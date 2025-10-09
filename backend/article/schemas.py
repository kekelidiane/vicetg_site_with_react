from pydantic import BaseModel
from typing import Optional
from datetime import datetime


class Article(BaseModel):
    title: str
    author: str
    content: str
    source: str
    date: datetime

    class Config:
        from_attributes = True

class ArticleCreate(BaseModel):
    title: str
    author: str
    content: str
    source: Optional[str] = "Unknown"
    date: Optional[datetime] = datetime.now()

    class Config:
        from_attributes = True

class ArticleUpdate(BaseModel):
    title: Optional[str] = None
    author: Optional[str] = None
    content: Optional[str] = None
    source: Optional[str] = None
    date: Optional[datetime] = datetime.now()

    class Config:
        from_attributes = True
