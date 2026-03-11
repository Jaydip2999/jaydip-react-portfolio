import { educationTimeline } from "../data/siteData";

function Education() {
  return (
    <section id="education" className="section reveal">
      <h2 className="section-title">
        <span className="section-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M12 4 3 8l9 4 9-4-9-4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
            <path d="M6.5 11.5v4.1c0 1.2 2.5 2.6 5.5 2.6s5.5-1.4 5.5-2.6v-4.1" stroke="currentColor" strokeWidth="1.6" />
            <path d="M21 9.2v5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </span>
        Education
      </h2>
      <p className="section-subtitle">
        A focused learning journey shaped by academics, hands-on practice, and real-world delivery.
      </p>

      <div className="education-timeline">
        {educationTimeline.map((item, index) => (
          <article
            key={`${item.year}-${item.title}`}
            className="education-timeline-item"
            style={{ "--delay": `${index * 0.1}s` }}
          >
            <div className="education-timeline-body">
              <div className="education-timeline-header">
                <span className="education-timeline-year">{item.year}</span>
                <span className="education-timeline-track">{item.track}</span>
              </div>
              <h3 className="education-timeline-title">{item.title}</h3>
              <p className="education-timeline-summary">{item.details}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Education;
