from pydantic import Field
from typing import List, Optional

from models import User


class Super_Admin(User):
    roles: Optional[List[str]] = Field(default = None)

    class Config:
        from_attributes = True