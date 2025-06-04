
import React from 'react';

const PlanCard = ({ velocidad, precio, caracteristicas, destacado, oferta }) => {
  return (
    <div className={`plan-card ${destacado ? 'plan-card--destacado' : ''}`}>
      {oferta && <div className="plan-oferta">{oferta}</div>}
      <h3 className="plan-velocidad">{velocidad}</h3>
      <div className="plan-precio">
        <span>{precio}</span> /mes
      </div>
      <ul className="plan-caracteristicas">
        {caracteristicas.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button className="plan-button">Contratar Plan</button>
    </div>
  );
};

export default PlanCard;