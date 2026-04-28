const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000'

export async function getItems() {
  const res = await fetch(`${BASE_URL}/items`)
  if (!res.ok) throw new Error('Error al obtener los artículos')
  return res.json()
}

export async function getItemById(id) {
  const res = await fetch(`${BASE_URL}/items/${id}`)
  if (!res.ok) throw new Error('Artículo no encontrado')
  return res.json()
}
