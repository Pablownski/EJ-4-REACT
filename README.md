# FutBlog ⚽

Mini blog de fútbol con artículos, filtros, favoritos y artículo aleatorio.
## Nivel objetivo: Senior

Este proyecto apunta al nivel **Senior** (100 pts), cumpliendo todos los requisitos base, Mid y Senior:
- Página 404 personalizada
- Búsqueda y filtro por categoría en el listado
- Botón "artículo aleatorio" con `useNavigate`
- Componentes reutilizables con PropTypes documentados
- Estado global con Context API (favoritos)
- Al menos 3 componentes con PropTypes definidos
- Base de datos real (PostgreSQL) consumida vía API REST

---

## Tecnologías

- **Frontend:** React 18 + Vite + React Router v6 + Context API
- **Backend:** Python + FastAPI + SQLAlchemy
- **Base de datos:** PostgreSQL 15

---

## Requisitos

- [Node.js](https://nodejs.org/) v18+
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)

---

## Instalación

### 1. Clonar el repositorio

```bash
git clone <url-del-repo>
cd EJ-4-REACT
```

### 2. Configurar variables de entorno

Copiá el archivo de ejemplo y completá los valores:

```bash
cp .env.example .env
```

`.env`:

```
POSTGRES_USER=
POSTGRES_PASSWORD=
POSTGRES_DB=
DATABASE_URL=
VITE_API_URL=
```

| Variable | Descripción | Ejemplo |
|---|---|---|
| `POSTGRES_USER` | Usuario de PostgreSQL | `postgres` |
| `POSTGRES_PASSWORD` | Contraseña de PostgreSQL | `postgres` |
| `POSTGRES_DB` | Nombre de la base de datos | `futbol_db` |
| `DATABASE_URL` | URL de conexión (local) | `postgresql://postgres:postgres@localhost:5432/futbol_db` |
| `VITE_API_URL` | URL del backend | `http://localhost:8000` |

---

## Levantar el proyecto

### Backend + Base de datos (Docker)

```bash
docker-compose up --build -d
```

Esto levanta PostgreSQL y FastAPI. La primera vez crea las tablas y carga los artículos automáticamente.

### Frontend (Vite)

En otra terminal:

```bash
cd frontend
npm install
npm run dev
```

### URLs

| Servicio | URL |
|---|---|
| Frontend | http://localhost:5173 |
| API | http://localhost:8000 |
| Docs API | http://localhost:8000/docs |

---

## Funcionalidades

- Listado de artículos con búsqueda y filtro por categoría
- Detalle de artículo
- Botón de artículo aleatorio
- Favoritos con Context API (persiste en sesión)
- Página 404 personalizada
- Seed automático con artículos precargados

## Rutas

| Ruta | Descripción |
|---|---|
| `/` | Home con artículos destacados |
| `/items` | Listado completo |
| `/items/:id` | Detalle del artículo |
| `/favorites` | Mis favoritos |
| `*` | Página 404 |

## Endpoints API

| Método | Ruta | Descripción |
|---|---|---|
| GET | `/items` | Lista todos los artículos |
| GET | `/items/:id` | Detalle de un artículo |

---

## Componentes reutilizables

### `<ItemCard item />`

Tarjeta de artículo que muestra imagen, categoría, título, resumen y botón de favorito.

| Prop | Tipo | Requerida | Descripción |
|---|---|---|---|
| `item.id` | `number` | ✅ | ID del artículo |
| `item.title` | `string` | ✅ | Título del artículo |
| `item.summary` | `string` | — | Resumen breve |
| `item.content` | `string` | — | Contenido completo |
| `item.author` | `string` | — | Autor |
| `item.category` | `string` | — | Categoría (ej. "Champions") |
| `item.image_url` | `string` | — | URL de la imagen de portada |
| `item.tags` | `string` | — | Etiquetas separadas por coma |

---

### `<SearchBar value onChange placeholder />`

Input de búsqueda controlado.

| Prop | Tipo | Requerida | Descripción |
|---|---|---|---|
| `value` | `string` | ✅ | Valor actual del input |
| `onChange` | `func` | ✅ | Callback que recibe el nuevo string |
| `placeholder` | `string` | — | Texto placeholder (default: "Buscar artículos...") |

---

### `<PageTransition>`

Envuelve una página y aplica animación de entrada/salida con Framer Motion. No recibe props propias; acepta cualquier elemento hijo (`children`).
