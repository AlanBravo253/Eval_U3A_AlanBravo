export default function FAQ({ faqs }) {
  return (
    <section id="faq" className="section">
      <div className="container">
        <h2 className="text-center mb-4">Preguntas frecuentes</h2>
        <div className="accordion" id="faqAccordion">
          {faqs.map((faq, index) => (
            <div className="accordion-item" key={faq.id}>
              <h3 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#faq${faq.id}`} aria-expanded="false" aria-controls={`faq${faq.id}`}>
                  {faq.question}
                </button>
              </h3>
              <div id={`faq${faq.id}`} className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
