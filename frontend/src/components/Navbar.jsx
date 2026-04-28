import { Link, NavLink } from 'react-router-dom'
import { useFavorites } from '../context/FavoritesContext'

function Navbar() {
  const { favorites } = useFavorites()

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">FutBlog</Link>
      <div className="navbar-links">
        <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
          Inicio
        </NavLink>
        <NavLink to="/items" className={({ isActive }) => isActive ? 'active' : ''}>
          Artículos
        </NavLink>
        <NavLink to="/favorites" className={({ isActive }) => isActive ? 'active' : ''}>
          Favoritos
          {favorites.length > 0 && <span className="badge">{favorites.length}</span>}
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
