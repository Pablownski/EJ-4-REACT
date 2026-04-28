import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <main className="not-found">
      <img src="/cr7.jpg" alt="CR7" className="not-found-bg" />
      <div className="not-found-overlay">
        <p className="not-found-label">Error</p>
        <h1 className="not-found-code">404</h1>
        <p className="not-found-msg">Esta página tiene mucha historia por cargar</p>
        <Link to="/" className="btn btn-primary btn-large">Volver al inicio</Link>
      </div>
    </main>
  )
}

export default NotFound
