function Education() {
  return (
    <section id="education" className="section reveal">
      <h2 className="section-title">Education</h2>
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
