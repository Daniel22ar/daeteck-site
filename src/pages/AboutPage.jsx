import React from 'react';
import '../styles/AboutPage.css'; // Sigue importando tu archivo CSS

const AboutPage = () => {
  return (
    <section id="nosotros" className="about-page__main-section">
      <div className="about-page__container">
        <h2 className="about-page__section-title">Nuestra Historia: Conectando a Concepción de Buenos Aires</h2>

        <div className="about-page__content-wrapper">
          <p className="about-page__intro-text">
            En **Daeteck Network**, somos más que un proveedor de internet; somos **vecinos comprometidos** con el progreso de nuestra comunidad. Nacímos y crecimos aquí, en **Concepción de Buenos Aires, Jalisco**, y nuestra misión es clara: impulsar el **fortalecimiento digital de la región** a través de una conexión a internet de la más alta calidad.
          </p>

          <p className="about-page__team-focus-text">
            Creemos firmemente en el poder transformador de la **fibra óptica**. Por eso, hemos invertido en infraestructura de última generación para llevar una conexión **rápida, estable y confiable** directamente a los hogares y negocios de nuestra gente. Cada byte que enviamos está respaldado por un equipo de **ingenieros, técnicos y especialistas en atención al cliente** de **Daeteck Network** que entienden las necesidades específicas de nuestra comunidad y están listos para ayudarte.
          </p>

          <div className="about-page__mvv-section">
            <div className="about-page__mvv-item">
              <h3>Nuestra Misión</h3>
              <p>
                En **Daeteck Network**, buscamos **fortalecer digitalmente Concepción de Buenos Aires y sus alrededores** brindando un servicio de internet de fibra óptica excepcional, que habilite nuevas oportunidades de desarrollo, educación y entretenimiento para todos nuestros habitantes.
              </p>
            </div>
            <div className="about-page__mvv-item">
              <h3>Nuestra Visión</h3>
              <p>
                Ser el **aliado tecnológico preferido de la región**, reconocido por nuestra infraestructura de vanguardia, nuestro servicio humano y cercano, y por contribuir activamente al bienestar y crecimiento de nuestra comunidad a través de **Daeteck Network**.
              </p>
            </div>
            <div className="about-page__mvv-item">
              <h3>Nuestros Valores</h3>
              <ul>
                <li>**Compromiso Local:** Servimos a nuestra comunidad con pasión y dedicación.</li>
                <li>**Calidad y Confiabilidad:** Ofrecemos un internet superior y un soporte en el que puedes confiar.</li>
                <li>**Innovación Constante:** Siempre buscamos las mejores soluciones para ti.</li>
                <li>**Atención Cercana:** Te escuchamos y resolvemos tus dudas con la amabilidad que mereces.</li>
              </ul>
            </div>
          </div>

          <div className="about-page__why-choose-us-section">
            <h3>¿Por Qué Elegir Daeteck Network?</h3>
            <ul className="about-page__why-choose-us-list">
              <li className="about-page__why-choose-us-item">
                <span className="about-page__icon">📍</span> **Somos de Aquí:** Conocemos la región y sus necesidades, ofreciéndote un servicio a la medida de **Concepción de Buenos Aires**.
              </li>
              <li className="about-page__why-choose-us-item">
                <span className="about-page__icon">⚡</span> **Fibra Óptica Real:** Disfruta de la máxima velocidad y estabilidad para todo lo que haces en línea con **Daeteck Network**.
              </li>
              <li className="about-page__why-choose-us-item">
                <span className="about-page__icon">🤝</span> **Soporte Amigable y Eficaz:** Olvídate de los call centers impersonales; aquí te atendemos con cercanía y la calidad de **Daeteck Network**.
              </li>
              <li className="about-page__why-choose-us-item">
                <span className="about-page__icon">🌱</span> **Compromiso con la Región:** Invertimos en la infraestructura local para el beneficio de todos en **Concepción de Buenos Aires**.
              </li>
            </ul>
          </div>

          <p className="about-page__cta-text">
            Te invitamos a conectarte con **Daeteck Network** y a ser parte del futuro digital de Concepción de Buenos Aires. ¡Juntos, impulsamos la conexión que mereces!
          </p>

          <div className="about-page__image-gallery">
            {/* Si tienes fotos de tu equipo local, de la infraestructura en la región, o de la comunidad, úsalas aquí. */}
            <img src="/images/equipo-local-concepcion.jpg" alt="Nuestro Equipo en Concepción de Buenos Aires" className="about-page__image" />
            <img src="/images/fibra-jalisco.jpg" alt="Infraestructura de Fibra Óptica en Jalisco" className="about-page__image" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutPage;