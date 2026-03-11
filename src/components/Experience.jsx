import { experiences } from "../data/siteData";

function Experience() {
  return (
    <section id="experience" className="section reveal">
      <h2 className="section-title">
        <span className="section-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M6 7.2V5.6c0-1.2 1-2.2 2.2-2.2h7.6c1.2 0 2.2 1 2.2 2.2v1.6" stroke="currentColor" strokeWidth="1.6" />
            <rect x="3.5" y="7.2" width="17" height="12.5" rx="2.4" stroke="currentColor" strokeWidth="1.6" />
            <path d="M3.8 12.2h16.4" stroke="currentColor" strokeWidth="1.6" />
            <path d="M10.4 11h3.2v2.2h-3.2z" stroke="currentColor" strokeWidth="1.6" />
          </svg>
        </span>
        Experience
      </h2>
      <p className="section-subtitle">
        Timeline of hands-on development work and focused growth.
      </p>

      <div className="experience-list">
        {experiences.map((item, index) => (
          <article key={item.role} className="experience-card" style={{ "--delay": `${index * 0.1}s` }}>
            <div className="experience-side">
              <p className="experience-period">{item.period}</p>
              <p className="experience-org">{item.org}</p>
            </div>
            <div className="experience-main">
              <h3 className="experience-role">{item.role}</h3>
              <p className="experience-details">{item.details}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
