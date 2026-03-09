function Contact() {
  const successRedirect =
    typeof window !== "undefined" ? `${window.location.origin}/#contact` : "https://formsubmit.co/";

  return (
    <section id="contact" className="contact section reveal">
      <h2 className="section-title">Get in Touch</h2>
      <p className="section-subtitle contact-subtitle">
        Have a project in mind or need a frontend developer for your team? Let us connect.
      </p>

      <div className="contact-wrapper">
        <div className="contact-info">
          <p className="contact-lead">
            I usually respond within 24 hours. Share your requirement and expected timeline.
          </p>
          <div className="contact-divider" aria-hidden="true" />

          <div className="contact-item">
            <span className="contact-label">Location</span>
            <p>Bhavnagar, Gujarat</p>
          </div>

          <div className="contact-item">
            <span className="contact-label">Phone</span>
            <p>+91 95741 69465</p>
          </div>

          <div className="contact-item">
            <span className="contact-label">Email</span>
            <p>jaydipdumraliya2052@gmail.com</p>
          </div>
        </div>

        <form
          className="contact-form"
          action="https://formsubmit.co/jaydipdumraliya2052@gmail.com"
          method="POST"
        >
          <input type="hidden" name="_subject" value="New Portfolio Contact Form Message" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value={successRedirect} />

          <input type="text" name="name" placeholder="Full Name" required />
          <input type="email" name="email" placeholder="Email Address" required />
          <input type="tel" name="phone" placeholder="Phone Number" required />
          <textarea name="message" placeholder="Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
