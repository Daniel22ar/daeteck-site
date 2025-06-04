import React from 'react';
import PlanCard from '../components/PlanCard'; 


const todosLosPlanesData = [
  // Los mismos planes que ya tienes
  
  {
    id: 1,
    velocidad: '30 Mbps',
    precio: '$250',
    caracteristicas: [
        'Navegación básica',
        'Redes sociales y correo electrónico',
    ],
    destacado: false,
    oferta: null
  },
  {
    id: 2,
    velocidad: '50 Mbps',
    precio: '$300',
    caracteristicas: [
      'Streaming HD en varios dispositivos',
      'Videollamadas estables',
      'Ideal para 3-5 dispositivos'
    ],
    destacado: true,
    oferta: '¡Popular!'
  },
  {
    id: 3,
    velocidad: '100 Mbps',
    precio: '$400',
    caracteristicas: [
      'Gaming sin lag',
      'Descargas ultrarrápidas',
      'Ideal para más de 5 dispositivos'
    ],
    destacado: false,
    oferta: null
  },
  {
    id: 4,
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

const PaquetesPage = () => {
  return (
    <section className="paquetes-page-section planes-internet-section"> 
      <div className="section-header">
        <h1>Todos nuestros Paquetes de Internet</h1>
        <p className="subtitle">
          Explora la gama completa de velocidades y elige el plan perfecto para ti.
        </p>
      </div>

      <div className="planes-grid">
        {todosLosPlanesData.map(plan => (
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
    </section>
  );
};

export default PaquetesPage;