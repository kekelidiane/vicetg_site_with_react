from typing import List, Optional
from pydantic import Field

from models import User


class Admin(User):
    roles: Optional[List[str]] = Field(default = None)

    class Config:
        from_attributes = True