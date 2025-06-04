import React, { useState } from 'react';
import '../styles/Contacto.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: '', 
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false); 
  const [submitMessage, setSubmitMessage] = useState(''); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(''); 

    
    try {

      const response = await fetch('URL_DE_TU_ENDPOINT_DE_ENVIO', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage('¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.');
        setFormData({ name: '', phone: '', subject: '', message: '' }); 
      } else {
        setSubmitMessage('Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo.');
        
        const errorData = await response.json();
        console.error('Error del servidor:', errorData);
      }
    } catch (error) {
      console.error('Error de red al enviar el formulario:', error);
      setSubmitMessage('No se pudo conectar con el servidor. Revisa tu conexión e inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false); 
    }
  };

  return (
    <section id="contacto" className="contact-page__main-section">
      <div className="contact-page__container">
        <h2 className="contact-page__section-title">Contáctanos: Estamos Aquí para Ayudarte</h2>

        <p className="contact-page__intro-text">
          ¿Tienes preguntas sobre nuestros planes de fibra óptica, necesitas soporte técnico o quieres verificar tu cobertura en Concepción de Buenos Aires? En Daeteck Network, estamos listos para escucharte.
        </p>

        <div className="contact-page__content-wrapper">
          {/* Columna Izquierda: Información de Contacto */}
          <div className="contact-page__info-column">
            <h3 className="contact-page__info-title">Nuestros Datos de Contacto</h3>
            <p className="contact-page__info-description">
              Comunícate con nosotros por el medio que prefieras.
            </p>

            <div className="contact-page__contact-item">
              <span className="contact-page__icon">📞</span> 
              <div className="contact-page__item-details">
                <h4>Llámanos</h4>
                <a href="tel:+523333324089" className="contact-page__link">+52 33 3332 4089</a>
              </div>
            </div>

            <div className="contact-page__contact-item">
              <span className="contact-page__icon">📧</span>
              <div className="contact-page__item-details">
                <h4>Envíanos un Email</h4>
                <a href="mailto:contacto@daetecknetwork.com" className="contact-page__link">contacto@daetecknetwork.com</a>
              </div>
            </div>

            <div className="contact-page__contact-item">
              <span className="contact-page__icon">📍</span> 
              <div className="contact-page__item-details">
                <h4>Visítanos</h4>
                <p>Calle Hermanos Echaury Pte #17</p> 
                <p>Concepción de Buenos Aires, Jalisco, México, 49170</p>
              </div>
            </div>

            <div className="contact-page__contact-item">
              <span className="contact-page__icon">💬</span> 
              <div className="contact-page__item-details">
                <h4>Horario de Atención</h4>
                <p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                <p>Sábados: 9:00 AM - 2:00 PM</p>
              </div>
            </div>

          </div>

          
          <div className="contact-page__form-column">
            <h3 className="contact-page__form-title">Envíanos un Mensaje Directo</h3>
            <form onSubmit={handleSubmit} className="contact-page__form">
              <div className="contact-page__form-group">
                <label htmlFor="name" className="contact-page__label">Nombre completo:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="contact-page__input"
                  placeholder="Tu nombre"
                  required
                />
              </div>

              <div className="contact-page__form-group">
                <label htmlFor="phone" className="contact-page__label">Teléfono:</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="contact-page__input"
                  placeholder="Ej: 341 123 4567"
                  required 
                />
              </div>

              <div className="contact-page__form-group">
                <label htmlFor="subject" className="contact-page__label">Asunto:</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="contact-page__input"
                  placeholder="Tema de tu consulta"
                  required
                />
              </div>

              <div className="contact-page__form-group">
                <label htmlFor="message" className="contact-page__label">Tu mensaje:</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="contact-page__textarea"
                  rows="6" 
                  placeholder="Escribe aquí tu consulta..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="contact-page__submit-button" disabled={isSubmitting}>
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
              </button>

              {submitMessage && (
                <p className={`contact-page__submit-status ${submitMessage.includes('éxito') ? 'success' : 'error'}`}>
                  {submitMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;