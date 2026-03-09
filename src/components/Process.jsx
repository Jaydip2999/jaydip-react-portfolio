import { workProcess } from "../data/siteData";

function Process() {
  return (
    <section id="process" className="section reveal">
      <h2 className="section-title">Work Process</h2>
      <p className="section-subtitle">
        Simple process that keeps delivery transparent and deadlines predictable.
      </p>

      <div className="process-grid">
        {workProcess.map((item, index) => (
          <article key={item.step} className="process-card" style={{ "--delay": `${index * 0.1}s` }}>
            <p className="process-step">{item.step}</p>
            <h3>{item.title}</h3>
            <p>{item.details}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Process;
