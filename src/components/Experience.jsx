import { experiences } from "../data/siteData";

function Experience() {
  return (
    <section id="experience" className="section reveal">
      <h2 className="section-title">Experience</h2>
      <p className="section-subtitle">
        Timeline of hands-on development work and focused growth.
      </p>

      <div className="timeline">
        {experiences.map((item, index) => (
          <article key={item.role} className="timeline-item" style={{ "--delay": `${index * 0.1}s` }}>
            <p className="timeline-year">{item.period}</p>
            <h3>{item.role}</h3>
            <p>{item.org}</p>
            <p className="timeline-meta">{item.details}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
