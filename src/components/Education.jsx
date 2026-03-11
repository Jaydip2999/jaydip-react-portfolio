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
        Academic background and focused upskilling track.
      </p>

      <div className="education-path">
        <article className="education-item">
          <div className="education-badge">
            <p className="education-year">2023 - 2026</p>
          </div>
          <div className="education-body">
            <h3>Bachelor of Computer Applications (BCA)</h3>
            <p className="education-place">MKBU, Gujarat</p>
            <p className="education-meta">
              Relevant Subjects: Web Development, DBMS, Programming, Software Engineering
            </p>
          </div>
        </article>

        <article className="education-item">
          <div className="education-badge">
            <p className="education-year">2024 - Present</p>
          </div>
          <div className="education-body">
            <h3>Full Stack Web Development (Self-Learning)</h3>
            <p className="education-place">Self-paced + project-based learning</p>
            <p className="education-meta">
              Focus: React, APIs, authentication, performance optimization
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Education;
