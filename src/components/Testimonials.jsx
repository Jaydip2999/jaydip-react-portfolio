import { testimonials } from "../data/siteData";

function Testimonials() {
  return (
    <section id="testimonials" className="section reveal">
      <h2 className="section-title">Testimonials</h2>
      <p className="section-subtitle">Feedback that reflects work quality, process, and professionalism.</p>

      <div className="testimonials-grid">
        {testimonials.map((item, index) => (
          <article key={item.quote} className="testimonial-card" style={{ "--delay": `${index * 0.1}s` }}>
            <p className="testimonial-quote">"{item.quote}"</p>
            <h3>{item.name}</h3>
            <p>{item.role}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
