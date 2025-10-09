from sqlalchemy import Column, Integer, String, DateTime

from core.database import db

class Article(db.Model):
    __tablename__ = "articles"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    author = Column(String)
    content = Column(String)
    source = Column(String)
    date = Column(DateTime)
   
 # visuals = Column(String)  # Stocker comme str et gérer la conversion dans la sérialisation
