import { useState } from 'react'

export default function ContactForm({ selectedService }) {
  const [form, setForm] = useState({ name: '', email: '', message: '', captcha: false })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setError('')
    setSuccess('')

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Todos los campos obligatorios deben estar completos.')
      return
    }

    if (!emailRegex.test(form.email)) {
      setError('Debes ingresar un correo válido.')
      return
    }

    if (!form.captcha) {
      setError('Debes confirmar que no eres un robot.')
      return
    }

    setSuccess('Formulario enviado correctamente. Esta es una simulación para la evaluación.')
    setForm({ name: '', email: '', message: '', captcha: false })
  }

  return (
    <section id="contacto" className="section bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <h2 className="text-center mb-3">Formulario de contacto</h2>
            <p className="text-center text-muted">El campo servicio se completa automáticamente desde las tarjetas.</p>
            <form className="card p-4 shadow-sm" onSubmit={handleSubmit} noValidate>
              <div className="mb-3">
                <label htmlFor="service" className="form-label">Servicio seleccionado</label>
                <input id="service" className="form-control" value={selectedService || 'Selecciona un servicio desde las tarjetas'} readOnly />
              </div>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Nombre completo *</label>
                <input id="name" name="name" className="form-control" value={form.name} onChange={handleChange} required maxLength="60" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Correo electrónico *</label>
                <input id="email" name="email" type="email" className="form-control" value={form.email} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Mensaje *</label>
                <textarea id="message" name="message" className="form-control" rows="4" value={form.message} onChange={handleChange} required maxLength="300"></textarea>
              </div>
              <div className="form-check mb-3">
                <input id="captcha" name="captcha" type="checkbox" className="form-check-input" checked={form.captcha} onChange={handleChange} />
                <label htmlFor="captcha" className="form-check-label">No soy un robot</label>
              </div>
              {error && <div className="alert alert-danger" role="alert">{error}</div>}
              {success && <div className="alert alert-success" role="alert">{success}</div>}
              <button className="btn btn-primary w-100" type="submit">Enviar solicitud</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
