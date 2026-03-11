function Achievements() {
  return (
    <section id="achievements" className="section section-compact reveal">
      <h2 className="section-title">
        <span className="section-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M7 4.5h10v3.6c0 3.5-2.2 6.3-5 6.3s-5-2.8-5-6.3V4.5Z"
              stroke="currentColor"
              strokeWidth="1.6"
            />
            <path d="M9.2 14.4v2.1L7 19.5h10l-2.2-3v-2.1" stroke="currentColor" strokeWidth="1.6" />
            <path d="M4.5 6.2h2.5c0 3-1.6 4.6-3.8 4.6V8.6c0-1.3.6-2.4 1.8-2.4Z" stroke="currentColor" strokeWidth="1.6" />
            <path d="M19.5 6.2h-2.5c0 3 1.6 4.6 3.8 4.6V8.6c0-1.3-.6-2.4-1.8-2.4Z" stroke="currentColor" strokeWidth="1.6" />
          </svg>
        </span>
        Achievements
      </h2>
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
