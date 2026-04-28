# FutBlog ⚽

Mini blog de fútbol con artículos, filtros, favoritos y artículo aleatorio.

## Tecnologías

- **Frontend:** React 18 + Vite + React Router v6 + Context API
- **Backend:** Python + FastAPI + SQLAlchemy
- **Base de datos:** PostgreSQL 15
- **DevOps:** Docker + Docker Compose

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
