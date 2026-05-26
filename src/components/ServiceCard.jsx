export default function ServiceCard({ service, onSelectService }) {
  return (
    <article className="card h-100 service-card">
      <img src={service.image} className="card-img-top" alt={`Imagen del servicio ${service.title}`} loading="lazy" />
      <div className="card-body d-flex flex-column">
        <h3 className="h5 card-title">{service.title}</h3>
        <p className="card-text flex-grow-1">{service.description}</p>
        <a href="#contacto" className="btn btn-primary mt-2" onClick={() => onSelectService(service.title)} aria-label={`Contactar por el servicio ${service.title}`}>
          Contáctanos
        </a>
      </div>
    </article>
  )
}
