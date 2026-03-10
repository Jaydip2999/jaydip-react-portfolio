import { services } from "../data/siteData";

function Services() {
  return (
    <section id="services" className="section reveal">
      <h2 className="section-title">Services</h2>
      <p className="section-subtitle">
        Practical development services focused on business clarity and product quality.
      </p>

      <div className="service-split">
        {services.map((service, index) => (
          <article key={service.title} className="service-split-card" style={{ "--delay": `${index * 0.1}s` }}>
            <div className="service-rail">
              <span className="service-rail-label">Service</span>
              <span className="service-rail-index">{String(index + 1).padStart(2, "0")}</span>
            </div>
            <div className="service-body">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;
