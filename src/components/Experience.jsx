import { experiences } from "../data/siteData";

function Experience() {
  return (
    <section id="experience" className="section reveal">
      <h2 className="section-title">Experience</h2>
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
