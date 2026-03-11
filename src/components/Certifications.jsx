import { certifications } from "../data/siteData";
import { FaCode, FaDatabase, FaReact } from "react-icons/fa6";

function Certifications() {
  const getCertIcon = (title) => {
    const value = title.toLowerCase();
    if (value.includes("mern")) return FaReact;
    if (value.includes("sql")) return FaDatabase;
    return FaCode;
  };

  return (
    <section id="certifications" className="section reveal">
      <h2 className="section-title">
        <span className="section-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M12 3.6c2.7 0 4.9 2.2 4.9 4.9 0 1.8-1 3.5-2.6 4.4v4.9l-2.3-1.2-2.3 1.2V12.9c-1.6-.9-2.6-2.6-2.6-4.4 0-2.7 2.2-4.9 4.9-4.9Z"
              stroke="currentColor"
              strokeWidth="1.6"
            />
            <path d="M12 6.6l.9 1.8 2 .3-1.4 1.4.3 2-1.8-.9-1.8.9.3-2-1.4-1.4 2-.3.9-1.8Z" stroke="currentColor" strokeWidth="1.2" />
          </svg>
        </span>
        Certifications
      </h2>
      <p className="section-subtitle">Verified learning that supports practical project delivery.</p>

      <div className="cert-grid">
        {certifications.map((item, index) => (
          <article key={item.title} className="cert-card" style={{ "--delay": `${index * 0.1}s` }}>
            <div className="cert-media">
              <img src={item.image} alt={`${item.title} certificate`} loading="lazy" />
              <span className="cert-badge">{item.badge}</span>
            </div>
            <div className="cert-body">
              <p className="cert-year">{item.year}</p>
              <h3 className="text-with-icon">
                <span className="inline-icon" aria-hidden="true">
                  {(() => {
                    const Icon = getCertIcon(item.title);
                    return <Icon size={18} />;
                  })()}
                </span>
                {item.title}
              </h3>
              <p className="cert-issuer">{item.issuer}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
