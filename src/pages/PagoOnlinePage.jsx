import React, { useState } from 'react';

// import { useNavigate } from 'react-router-dom';
import '../styles/PagoOnlinePage.css'; // Asegúrate de tener un archivo CSS para estilos

const PagoOnlinePage = () => {
  const [subscriberNumber, setSubscriberNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(''); // Para mensajes de error o éxito
  const [isError, setIsError] = useState(false); // Para cambiar el estilo del mensaje
  
  // Si usas React Router, inicializa useNavigate:
  // const navigate = useNavigate();

  const handleInputChange = (e) => {
    setSubscriberNumber(e.target.value);
    setMessage(''); // Limpiar mensajes al empezar a escribir
  };

  const handleSearch = async (e) => {
    e.preventDefault(); // Evitar que el formulario recargue la página

    if (!subscriberNumber.trim()) {
      setMessage('Por favor, ingresa un número de suscriptor.');
      setIsError(true);
      return;
    }

    setIsLoading(true);
    setMessage('');
    setIsError(false);

    try {
      // --- ESTE ES EL ENDPOINT DE TU BACKEND ---
      // Deberás implementar una API en tu servidor que:
      // 1. Reciba el subscriberNumber.
      // 2. Consulte tu base de datos.
      // 3. Devuelva una respuesta indicando si el suscriptor existe y,
      //    opcionalmente, datos relevantes para el checkout (ej. ID del suscriptor, monto adeudado).
      const response = await fetch(`/api/check-subscriber?subscriberId=${subscriberNumber}`, {
        method: 'GET', // O 'POST' si prefieres enviar el número en el cuerpo de la petición
        headers: {
          'Content-Type': 'application/json',
          // Puedes añadir aquí headers de autenticación si tu API los requiere
        },
        // body: JSON.stringify({ subscriberId: subscriberNumber }) // Si usas POST
      });

      if (response.ok) { // Si el servidor responde con un código 2xx (ej. 200 OK)
        const data = await response.json();
        // Asumiendo que tu backend devuelve un JSON como { found: true, id: '...', name: '...' }
        if (data.found) {
          setMessage('Suscriptor encontrado. Redirigiendo a la página de pago...');
          setIsError(false);
          setIsLoading(false);

          // Redirigir a la página de checkout.
          // Si usas React Router:
          // navigate(`/checkout?subscriberId=${data.id}`);
          // Si no usas React Router y quieres una redirección simple (recargará la página):
          window.location.href = `/checkout?subscriberId=${data.id}`;

        } else {
          setMessage('El número de suscriptor no existe. Por favor, verifica e inténtalo de nuevo.');
          setIsError(true);
          setIsLoading(false);
        }
      } else if (response.status === 404) { // Si el backend indica "no encontrado" específicamente
        setMessage('El número de suscriptor no existe. Por favor, verifica e inténtalo de nuevo.');
        setIsError(true);
        setIsLoading(false);
      } else {
        // Otros errores del servidor (ej. 500 Internal Server Error)
        setMessage('Ocurrió un error al consultar el suscriptor. Por favor, inténtalo más tarde.');
        setIsError(true);
        setIsLoading(false);
        console.error('Error del servidor:', response.status, await response.text());
      }

    } catch (error) {
      console.error('Error de conexión o de la API:', error);
      setMessage('No se pudo conectar con el servicio. Verifica tu conexión a internet.');
      setIsError(true);
      setIsLoading(false);
    }
  };

  return (
    <section id="pagos-online" className="payments-page__main-section">
      <div className="payments-page__container">
        <h2 className="payments-page__section-title">Pagos en Línea: Daeteck Network</h2>

        <p className="payments-page__intro-text">
          Paga nuestros servicios de forma rápida y segura. Ingresa tu número de suscriptor para consultar tu saldo y proceder al pago.
        </p>

        <form onSubmit={handleSearch} className="payments-page__form">
          <div className="payments-page__form-group">
            <label htmlFor="subscriberNumber" className="payments-page__label">Número de Suscriptor:</label>
            <input
              type="text"
              id="subscriberNumber"
              name="subscriberNumber"
              value={subscriberNumber}
              onChange={handleInputChange}
              className="payments-page__input"
              placeholder="Ej: CBA000"
              required
              disabled={isLoading}
            />
          </div>

          <button
            type="submit"
            className="payments-page__submit-button"
            disabled={isLoading}
          >
            {isLoading ? 'Consultando...' : 'Consultar Suscriptor'}
          </button>

          {message && (
            <p className={`payments-page__status-message ${isError ? 'error' : 'success'}`}>
              {message}
            </p>
          )}
        </form>

        <div className="payments-page__info-section">
          <h3>¿Problemas para pagar?</h3>
          <p>Si tienes dificultades para encontrar tu número de suscriptor o realizar tu pago, no dudes en contactarnos:</p>
          <ul>
            <li>📞 Teléfono: 33 3332 4089</li>
            <li>📧 Email: contacto@daetecknetwork.com</li>
          </ul>
          <p>También puedes visitar nuestra sección de <a href="/preguntas-frecuentes">Preguntas Frecuentes</a>.</p>
        </div>

      </div>
    </section>
  );
};

export default PagoOnlinePage;