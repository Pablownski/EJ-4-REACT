import { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'

const FavoritesContext = createContext()

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([])

  const addFavorite = (item) => {
    setFavorites((prev) => [...prev, item])
  }

  const removeFavorite = (id) => {
    setFavorites((prev) => prev.filter((item) => item.id !== id))
  }

  const isFavorite = (id) => favorites.some((item) => item.id === id)

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  )
}

FavoritesProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export function useFavorites() {
  return useContext(FavoritesContext)
}
