export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top shadow-sm" aria-label="Navegación principal">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#inicio">Proviemplea</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Abrir menú">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#nosotros">Nosotros</a></li>
            <li className="nav-item"><a className="nav-link" href="#servicios">Servicios</a></li>
            <li className="nav-item"><a className="nav-link" href="#testimonios">Testimonios</a></li>
            <li className="nav-item"><a className="nav-link" href="#faq">Preguntas</a></li>
            <li className="nav-item"><a className="nav-link" href="#contacto">Contacto</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
