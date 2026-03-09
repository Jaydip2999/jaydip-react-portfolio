import { services } from "../data/siteData";

function Services() {
  return (
    <section id="services" className="section reveal">
      <h2 className="section-title">Services</h2>
      <p className="section-subtitle">
        Practical development services focused on business clarity and product quality.
      </p>

      <div className="service-grid">
        {services.map((service, index) => (
          <article key={service.title} className="service-card" style={{ "--delay": `${index * 0.1}s` }}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;
