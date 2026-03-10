import { certifications } from "../data/siteData";

function Certifications() {
  return (
    <section id="certifications" className="section reveal">
      <h2 className="section-title">Certifications</h2>
      <p className="section-subtitle">Verified learning that supports practical project delivery.</p>

      <div className="cert-list">
        {certifications.map((item, index) => (
          <article key={item.title} className="cert-item" style={{ "--delay": `${index * 0.1}s` }}>
            <p className="cert-year">{item.year}</p>
            <div>
              <h3>{item.title}</h3>
              <p>{item.issuer}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
