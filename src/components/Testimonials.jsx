import { useState } from 'react'

export default function Testimonials({ testimonials }) {
  const [index, setIndex] = useState(0)
  const current = testimonials[index]

  const next = () => setIndex((index + 1) % testimonials.length)
  const previous = () => setIndex((index - 1 + testimonials.length) % testimonials.length)

  if (!current) return null

  return (
    <section id="testimonios" className="section bg-light">
      <div className="container text-center">
        <h2>Testimonios</h2>
        <p className="text-muted">Opiniones simuladas para mostrar el funcionamiento del carrusel.</p>
        <div className="testimonial-box mx-auto" aria-live="polite">
          <p className="fs-5">“{current.text}”</p>
          <strong>{current.name}</strong>
          <p className="text-muted mb-0">{current.role}</p>
        </div>
        <div className="mt-3 d-flex justify-content-center gap-2">
          <button className="btn btn-outline-primary" onClick={previous} aria-label="Ver testimonio anterior">Anterior</button>
          <button className="btn btn-primary" onClick={next} aria-label="Ver siguiente testimonio">Siguiente</button>
        </div>
      </div>
    </section>
  )
}
