import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useFavorites } from '../context/FavoritesContext'

function ItemCard({ item }) {
  const { isFavorite, addFavorite, removeFavorite } = useFavorites()
  const favorite = isFavorite(item.id)

  const handleFavorite = (e) => {
    e.preventDefault()
    if (favorite) removeFavorite(item.id)
    else addFavorite(item)
  }

  return (
    <div className="item-card">
      {item.image_url && (
        <img src={item.image_url} alt={item.title} className="item-card-img" />
      )}
      <div className="item-card-body">
        {item.category && <span className="item-card-category">{item.category}</span>}
        <h3 className="item-card-title">{item.title}</h3>
        <p className="item-card-summary">{item.summary}</p>
        <div className="item-card-footer">
          <Link to={`/items/${item.id}`} className="btn btn-primary">Leer más</Link>
          <button
            onClick={handleFavorite}
            className={`btn ${favorite ? 'btn-favorite-active' : 'btn-favorite'}`}
            title={favorite ? 'Quitar de favoritos' : 'Añadir a favoritos'}
          >
            {favorite ? '★' : '☆'}
          </button>
        </div>
      </div>
    </div>
  )
}

ItemCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string,
    content: PropTypes.string,
    author: PropTypes.string,
    category: PropTypes.string,
    image_url: PropTypes.string,
    tags: PropTypes.string,
  }).isRequired,
}

export default ItemCard
