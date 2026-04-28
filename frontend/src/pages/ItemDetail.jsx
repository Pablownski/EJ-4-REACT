import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useFavorites } from '../context/FavoritesContext'
import { getItemById } from '../services/api'

function ItemDetail() {
  const { id } = useParams()
  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { isFavorite, addFavorite, removeFavorite } = useFavorites()

  useEffect(() => {
    getItemById(id)
      .then(setItem)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return <div className="container"><p className="loading">Cargando artículo...</p></div>
  if (error) return <div className="container"><p className="error">Error: {error}</p></div>
  if (!item) return null

  const favorite = isFavorite(item.id)

  const handleFavorite = () => {
    if (favorite) removeFavorite(item.id)
    else addFavorite(item)
  }

  const tags = item.tags ? item.tags.split(',').map((t) => t.trim()) : []

  return (
    <main className="item-detail">
      {item.image_url && (
        <div
          className="item-detail-hero"
          style={{ backgroundImage: `url(${item.image_url})` }}
        />
      )}
      <div className="container">
        <div className="item-detail-meta">
          {item.category && <span className="item-card-category">{item.category}</span>}
          {item.author && <span className="item-detail-author">Por {item.author}</span>}
          {item.published_at && (
            <span className="item-detail-date">
              {new Date(item.published_at).toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
          )}
        </div>

        <h1 className="item-detail-title">{item.title}</h1>
        {item.summary && <p className="item-detail-summary">{item.summary}</p>}

        <div className="item-detail-actions">
          <button
            onClick={handleFavorite}
            className={`btn ${favorite ? 'btn-favorite-active' : 'btn-favorite'}`}
          >
            {favorite ? '★ En favoritos' : '☆ Añadir a favoritos'}
          </button>
          <Link to="/items" className="btn btn-secondary">← Volver</Link>
        </div>

        <div className="item-detail-content">
          {item.content.split('\n').map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        {tags.length > 0 && (
          <div className="item-detail-tags">
            {tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}

export default ItemDetail
