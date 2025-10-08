from datetime import datetime
from sqlalchemy import Column, Integer, String, JSON, DateTime

from core.database import db

class UserModel(db.Model):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True)
    username = Column(String, unique=True, nullable=False)
    full_name = Column(String)
    mail = Column(String(50), unique=True, nullable=False)
    phone = Column(String)
    address = Column(String)
    hashed_password = Column(String, nullable=False)  # mot de passe haché


class TokenModel(db.Model):
    __tablename__ = 'tokens'

    id = Column(Integer, primary_key=True)
    token = Column(String, unique=True, nullable=False)
    created_at =  Column(DateTime, default=datetime.now(), onupdate=datetime.now)
    expires_at = Column(DateTime, nullable=False)
    
class Participant(UserModel):
    __tablename__ = 'participants'

    profession = Column(String)


class Admin(UserModel):
    __tablename__ = 'admins'

    role = Column(JSON, default="des droits")
    

class SuperAdmin(UserModel):
    __tablename__ = 'super_admins'

    role = Column(JSON, default="Il aura plus de role que l'admin")
