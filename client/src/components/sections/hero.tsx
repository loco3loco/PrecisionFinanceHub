import React from 'react';

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Solutmsa</h1>
          <p>Confianza garantizada. Satisfacción del cliente al 98%</p>
          <p>Más de 100 empresas confiaron en nosotros.</p>
          <p>Un equipo de más de 800 colaboradores apasionados por tu éxito.</p>
          <p>En Solutmsa, nos dedicamos a ayudarte a alcanzar tus metas financieras con soluciones innovadoras y un servicio personalizado.</p>
        </div>
      </div>
      <div className="hero-image"
           style={{ backgroundImage: "url('https://images.unsplash.com/photo-1576437557195-47f5a8bcb085?auto=format&fit=crop&q=80')" }}
      >
      </div>
    </section>
  );
}


function ServiceSection() {
  const services = [
    { name: "Asesoría Fiscal", link: "/asesoria-fiscal", image: "/images/fiscal-service.jpg" },
    { name: "Servicio 2", link: "/servicio-2", image: "/images/service2.jpg" },
    { name: "Servicio 3", link: "/servicio-3", image: "/images/service3.jpg" },
  ];

  return (
    <section className="services">
      <h2>Nuestros Servicios</h2>
      <div className="service-grid">
        {services.map((service) => (
          <a href={service.link} key={service.name}>
            <div className="service-card">
              <img src={service.image} alt={service.name} />
              <h3>{service.name}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}


function Footer() {
    return (
        <footer>
            <div>
                <h3>Sucursales</h3>
                <p>Montevideo: Dirección 1</p>
                <p>Atlántida: Dirección 2</p>
            </div>
        </footer>
    )
}


function App() {
  return (
    <div>
      <HeroSection />
      <ServiceSection />
      <Footer />
    </div>
  );
}

export default App;