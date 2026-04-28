from typing import List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.item import Article
from app.schemas.item import ArticleResponse

router = APIRouter()


@router.get("/items", response_model=List[ArticleResponse])
def get_items(db: Session = Depends(get_db)):
    return db.query(Article).order_by(Article.published_at.desc()).all()


@router.get("/items/{item_id}", response_model=ArticleResponse)
def get_item(item_id: int, db: Session = Depends(get_db)):
    article = db.query(Article).filter(Article.id == item_id).first()
    if not article:
        raise HTTPException(status_code=404, detail="Artículo no encontrado")
    return article
