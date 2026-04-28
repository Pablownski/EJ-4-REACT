import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCard from '../components/ItemCard'
import { getItems } from '../services/api'

function Home() {
  const [featured, setFeatured] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getItems()
      .then((data) => setFeatured(data.slice(0, 3)))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  return (
    <main className="home">
      <section className="hero">
        <h1>FutBlog</h1>
        <p>Tu portal de noticias, análisis y pasión por el fútbol</p>
        <Link to="/items" className="btn btn-primary btn-large">
          Ver todos los artículos
        </Link>
      </section>

      <section className="featured">
        <h2>Artículos destacados</h2>
        {loading && <p className="loading">Cargando...</p>}
        {error && <p className="error">Error: {error}</p>}
        <div className="items-grid">
          {featured.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Home
