import React from 'react';
import { NavLink, Link } from 'react-router-dom'


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
            <li><Link to="/AvisoPrivacidad.pdf" target="_blank" rel="noopener noreferrer">Aviso de privacidad</Link></li>
            <li><Link to="/CartaDerechosMinimos.pdf" target="_blank" rel="noopener noreferrer">Carta de derechos minimos</Link></li>
            <li><Link to="/AdministracionRed.pdf"target="_blank" rel="noopener noreferrer" >Código de políticas de gestión de tráfico y administración de red</Link></li>
            <li><Link to="/PracticasComerciales.pdf"target="_blank" rel="noopener noreferrer" >Código de prácticas comerciales</Link></li>
            <li><Link to="/InformacionSeguridad.pdf" target="_blank" rel="noopener noreferrer">Información Seguridad y Justicia Area Responsable</Link></li>
            <li><Link to="/InformacionTransparente.pdf" target="_blank" rel="noopener noreferrer" >Información Transparente Comparable</Link></li>
          </ul>
        </div>

        <div className="footer-section links">
          <h3>Información</h3>
          <ul>
            <li><NavLink className= {({isActive}) => isActive ? "active" : ""} to="/">Inicio</NavLink></li>
            <li><NavLink className= {({isActive}) => isActive ? "active" : ""} to="/nosotros">Nosotros</NavLink></li>
            <li><NavLink className= {({isActive}) => isActive ? "active" : ""} to="/servicios">Servicios</NavLink></li>
            <li><NavLink className= {({isActive}) => isActive ? "active" : ""} to="/contacto">Contacto</NavLink></li>
            <li><NavLink className= {({isActive}) => isActive ? "active" : ""} to="/cobertura">Cobertura</NavLink></li>
            <li><NavLink className= {({isActive}) => isActive ? "active" : ""} to="/paquetes">Paquetes</NavLink></li>
            <li><NavLink className= {({isActive}) => isActive ? "active" : ""} to="/pago-online">Pago Online</NavLink></li>
            </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contáctanos</h3>
          <p>Email: <a href="mailto:contacto@daetecknetwork.com">contacto@daetecknetwork.com</a></p>
          <p>Teléfono: <a href="tel:+523333324089">+52 33 3332 4089</a></p>
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