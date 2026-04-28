import { Link } from 'react-router-dom'
import { useFavorites } from '../context/FavoritesContext'
import ItemCard from '../components/ItemCard'

function Favorites() {
  const { favorites } = useFavorites()

  return (
    <main className="container">
      <h1 style={{ marginBottom: '2rem' }}>Mis Favoritos</h1>
      {favorites.length === 0 ? (
        <div className="empty-state">
          <p>No tenés artículos favoritos aún.</p>
          <Link to="/items" className="btn btn-primary">Explorar artículos</Link>
        </div>
      ) : (
        <div className="items-grid">
          {favorites.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </main>
  )
}

export default Favorites
