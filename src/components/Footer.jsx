import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section about-f">
          <h3>Daeteck Network</h3>
          <p>Somos una empresa dedicada a proveer internet asi como soluciones de red, cableado estructurado y más.</p>
          <div className="social-links">
              <a href="https://www.facebook.com/DaeteckNetwork" target= "_blank" class="footer__social"><i class='bx bxl-facebook'></i></a>
              <a href="https://wa.link/i3apxe" target= "_blank" class="footer__social"><i class='bx bxl-whatsapp'></i></a>
            </div>
        </div>

        <div className="footer-section links">
          <h3>Legales</h3>
          <ul>
            <li><a href='/public/AvisoPrivacidad.pdf' target="_blank" rel="noopener noreferrer">Aviso de privacidad</a></li>
            <li><a href='/public/CartaDerechosMinimos.pdf' target="_blank" rel="noopener noreferrer">Carta de derechos minimos</a></li>
            <li><a href='/public/AdministracionRed.pdf' target="_blank" rel="noopener noreferrer">Codigo de politicas de gestion de trafico y administracion de red</a></li>
            <li><a href='/public/PracticasComerciales.pdf' target="_blank" rel="noopener noreferrer">Codigo de practicas comerciales</a></li>
            <li><a href='/public/InformacionSeguridad.pdf' target="_blank" rel="noopener noreferrer">Informacion Seguridad y Justicia Area Responsable</a></li>
            <li><a href='/public/InformacionTransparente.pdf' target="_blank" rel="noopener noreferrer">Información Transparente Comparable</a></li>
          </ul>
        </div>

        <div className="footer-section links">
          <h3>Información</h3>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/nosotros">Nosotros</a></li>
            <li><a href="/servicios">Servicios</a></li>
            <li><a href="/contacto">Contacto</a></li>
            <li><a href="/cobertura">Cobertura</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contáctanos</h3>
          <p>Email:contacto@daetecknetwork.com</p>
          <p>Teléfono: +52 33 3332 4089</p> 
          <p>Dirección: Hermanos Echaury Pte #17, Concepcion de Buenos Aires C.P. 49170 Jalisco</p> 
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Daeteck Network. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;