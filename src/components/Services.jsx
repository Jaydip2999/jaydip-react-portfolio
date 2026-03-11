import { services } from "../data/siteData";

function Services() {
  return (
    <section id="services" className="section reveal">
      <h2 className="section-title">
        <span className="section-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M10.8 3.8 9.2 6.2l-2.6.4-1.2 2.4 1.6 2-1.6 2 1.2 2.4 2.6.4 1.6 2.4 2.6-.9 2.6.9 1.6-2.4 2.6-.4 1.2-2.4-1.6-2 1.6-2-1.2-2.4-2.6-.4-1.6-2.4-2.6.9-2.6-.9Z"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />
            <circle cx="12" cy="11" r="2.6" stroke="currentColor" strokeWidth="1.6" />
          </svg>
        </span>
        Services
      </h2>
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
