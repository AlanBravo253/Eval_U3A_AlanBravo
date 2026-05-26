import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import ServiceCard from './components/ServiceCard.jsx'
import Testimonials from './components/Testimonials.jsx'
import FAQ from './components/FAQ.jsx'
import ContactForm from './components/ContactForm.jsx'
import servicesData from './data/services.json'
import testimonialsData from './data/testimonials.json'
import faqsData from './data/faqs.json'

export default function App() {
  const [services, setServices] = useState([])
  const [testimonials, setTestimonials] = useState([])
  const [faqs, setFaqs] = useState([])
  const [selectedService, setSelectedService] = useState('')

  useEffect(() => {
    // Simulación de consumo de API/CMS local.
    setServices(servicesData)
    setTestimonials(testimonialsData)
    setFaqs(faqsData)
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <section id="inicio" className="hero text-white">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <p className="badge bg-light text-primary">Departamento de Empleo Providencia</p>
                <h1>Proviemplea: conexión simple entre empresas y talento local</h1>
                <p className="lead">Landing page estudiantil desarrollada con React para presentar servicios, testimonios, preguntas frecuentes y formulario de contacto.</p>
                <a href="#servicios" className="btn btn-light btn-lg">Ver servicios</a>
              </div>
            </div>
          </div>
        </section>

        <section id="nosotros" className="section">
          <div className="container">
            <div className="row align-items-center g-4">
              <div className="col-lg-6">
                <h2>Nosotros</h2>
                <p>El Departamento de Empleo Providencia busca apoyar la empleabilidad, la inclusión laboral y la vinculación entre personas y empresas.</p>
                <p>Este proyecto propone una solución digital simple que permite mostrar información de servicios y facilitar el contacto mediante una interfaz clara, accesible y adaptable a distintos dispositivos.</p>
              </div>
              <div className="col-lg-6">
                <div className="info-box">
                  <h3 className="h5">Objetivo del proyecto</h3>
                  <p>Reducir procesos manuales, mejorar la comunicación y entregar una experiencia más rápida para candidatos y empresas.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="servicios" className="section bg-light">
          <div className="container">
            <h2 className="text-center mb-2">Servicios</h2>
            <p className="text-center text-muted mb-4">Datos cargados desde JSON simulando un CMS o API interna.</p>
            <div className="row g-4">
              {services.map(service => (
                <div className="col-md-6 col-lg-3" key={service.id}>
                  <ServiceCard service={service} onSelectService={setSelectedService} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <Testimonials testimonials={testimonials} />
        <FAQ faqs={faqs} />
        <ContactForm selectedService={selectedService} />
      </main>

      <footer className="bg-primary text-white text-center py-4">
        <div className="container">
          <p className="mb-1">Proviemplea - Evaluación Sumativa Unidad 3</p>
          <small>Proyecto desarrollado con React, Bootstrap, componentes reutilizables y datos dinámicos.</small>
        </div>
      </footer>
    </>
  )
}
