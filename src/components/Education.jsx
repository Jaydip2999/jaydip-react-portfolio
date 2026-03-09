function Education() {
  return (
    <section id="education" className="section reveal">
      <h2 className="section-title">Education</h2>
      <p className="section-subtitle">
        Academic background and focused upskilling track.
      </p>

      <div className="timeline">
        <article className="timeline-item">
          <p className="timeline-year">2023 - 2026</p>
          <h3>Bachelor of Computer Applications (BCA) </h3>
          <p>MKBU ,Gujarat</p>
          <p className="timeline-meta">Relevant Subjects: Web Development, DBMS, Programming, Software Engineering</p>
        </article>

        <article className="timeline-item">
          <p className="timeline-year">2024 - Present</p>
          <h3>Full Stack Web Development (Self-Learning)</h3>
          <p>Self-paced + project-based learning</p>
          <p className="timeline-meta">
            Focus: React, APIs, authentication, performance optimization
          </p>
        </article>
      </div>
    </section>
  );
}

export default Education;
