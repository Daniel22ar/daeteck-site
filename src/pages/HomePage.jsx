import React from 'react'
import PlanCard from '../components/PlanCard';
import { Link } from 'react-router-dom';

const planesData = [
  {
    id: 1,
    velocidad: '50 Mbps',
    precio: '$300', // Puedes ajustar la moneda si es necesario (MXN)
    caracteristicas: [
      'Ideal para uso básico',
      'Navegación y redes sociales',
      'Streaming en HD',
    ],
    destacado: false,
    oferta: null
  },
  {
    id: 2,
    velocidad: '100 Mbps',
    precio: '$400',
    caracteristicas: [
      'Ideal para familias y streaming',
      'Streaming 4K en múltiples dispositivos',
      'Descargas rápidas',
    ],
    destacado: true,
    oferta: '¡El más popular!'
  },
  {
    id: 3,
    velocidad: '200 Mbps',
    precio: '$550',
    caracteristicas: [
      'Ideal para gamers y trabajo pesado',
      'Descargas ultrarrápidas',
      'Videollamadas sin interrupciones',
      'Soporte técnico premium'
    ],
    destacado: false,
    oferta: null
  }
];

const HomePage = () => {
  return (
    <div className="container-nav">
      <section >
          <div class="home-banner container">
            <h1 class="home__title">Daeteck Network </h1>
          </div>
      </section>

      <div className="about">
        <div className="about-title">
          
        </div>
        <div className="about-sections">
          <div className="about-left">
            <img src="../../src/assets/about.webp" className='about-img' />
          </div>
          
          <div className="about-rigth">
            <div className="about-para">
              <h2>¿Quiénes somos?</h2>
              <p>Somos una nueva empresa en el campo de los proveedores de servicios de Internet (ISP), con el objetivo de conectar a las personas y empresas de manera eficiente y confiable. Nos enfocamos en brindar soluciones de conectividad que se ajusten a las necesidades de nuestros clientes, combinando tecnología avanzada con un servicio al cliente de alta calidad.</p>
            </div>
          </div>
        </div>
      </div>

      <section className="planes-internet-section">
        <div className="section-header"> 
          <h2>Elige tu Velocidad Ideal</h2>
          <p className="subtitle">
            Descubre los planes de internet de alta velocidad que tenemos para ti.
            Conéctate al mundo sin límites.
          </p>
        </div>



        <div className="planes-grid">
          {planesData.map(plan => (
          <PlanCard
            key={plan.id}
            velocidad={plan.velocidad}
            precio={plan.precio}
            caracteristicas={plan.caracteristicas}
            destacado={plan.destacado}
            oferta={plan.oferta}
          />
        ))}
        </div>  

        <Link to="/paquetes" className="btn-ver-todos">
          Conoce todos nuestros paquetes
        </Link>

      </section>

    </div>
    
  )
}

export default HomePage
