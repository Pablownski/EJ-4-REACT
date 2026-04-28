from datetime import datetime
from typing import Optional
from pydantic import BaseModel, ConfigDict


class ArticleResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    title: str
    summary: Optional[str] = None
    content: str
    author: Optional[str] = None
    category: Optional[str] = None
    image_url: Optional[str] = None
    tags: Optional[str] = None
    published_at: Optional[datetime] = None
