import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ItemCard from '../components/ItemCard'
import SearchBar from '../components/SearchBar'
import { getItems } from '../services/api'

function Items() {
  const [items, setItems] = useState([])
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    getItems()
      .then(setItems)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  const categories = [...new Set(items.map((item) => item.category).filter(Boolean))]

  const filtered = items.filter((item) => {
    const matchesSearch =
      !search ||
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.summary?.toLowerCase().includes(search.toLowerCase()) ||
      item.tags?.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = !category || item.category === category
    return matchesSearch && matchesCategory
  })

  const handleRandom = () => {
    if (items.length === 0) return
    const random = items[Math.floor(Math.random() * items.length)]
    navigate(`/items/${random.id}`)
  }

  return (
    <main className="items-page">
      <div className="items-header">
        <h1>Artículos</h1>
        <button onClick={handleRandom} className="btn btn-secondary">
          Artículo aleatorio
        </button>
      </div>

      <div className="filters">
        <SearchBar
          value={search}
          onChange={setSearch}
          placeholder="Buscar por título, resumen o etiquetas..."
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="category-select"
        >
          <option value="">Todas las categorías</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {loading && <p className="loading">Cargando artículos...</p>}
      {error && <p className="error">Error: {error}</p>}
      {!loading && !error && filtered.length === 0 && (
        <p className="no-results">No se encontraron artículos con esos criterios.</p>
      )}

      <div className="items-grid">
        {filtered.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </main>
  )
}

export default Items
