function Achievements() {
  return (
    <section id="achievements" className="section section-compact reveal">
      <h2 className="section-title">Achievements</h2>
      <p className="section-subtitle">
        Highlights that reflect consistent learning and delivery quality.
      </p>

      <div className="achievement-grid">
        <article className="achievement-card">
          <p className="achievement-value">1+</p>
          <h3>Projects Delivered</h3>
          <p>Responsive websites and apps built with clean and reusable code.</p>
        </article>

        <article className="achievement-card">
          <p className="achievement-value">98%</p>
          <h3>Client Satisfaction</h3>
          <p>Strong communication and reliable execution across milestones.</p>
        </article>

        <article className="achievement-card">
          <p className="achievement-value">3+</p>
          <h3>Years Learning</h3>
          <p>Continuous upskilling in modern frontend and full stack tooling.</p>
        </article>
      </div>
    </section>
  );
}

export default Achievements;
