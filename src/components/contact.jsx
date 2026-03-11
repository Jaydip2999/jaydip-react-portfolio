function Contact() {
  const successRedirect =
    typeof window !== "undefined" ? `${window.location.origin}/#contact` : "https://formsubmit.co/";

  return (
    <section id="contact" className="contact section reveal">
      <h2 className="section-title">
        <span className="section-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M4.5 6.5h15c1.1 0 2 .9 2 2v7.8c0 1.1-.9 2-2 2h-15c-1.1 0-2-.9-2-2V8.5c0-1.1.9-2 2-2Z"
              stroke="currentColor"
              strokeWidth="1.6"
            />
            <path d="m4.6 8 7.4 5.2L19.4 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        Get in Touch
      </h2>
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
            <span className="contact-label text-with-icon">
              <span className="inline-icon inline-icon-muted" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 3.5c3.1 0 5.6 2.5 5.6 5.6 0 4.2-5.6 11.4-5.6 11.4S6.4 13.3 6.4 9.1C6.4 6 8.9 3.5 12 3.5Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <circle cx="12" cy="9.1" r="2.2" stroke="currentColor" strokeWidth="1.6" />
                </svg>
              </span>
              Location
            </span>
            <p>Bhavnagar, Gujarat</p>
          </div>

          <div className="contact-item">
            <span className="contact-label text-with-icon">
              <span className="inline-icon inline-icon-muted" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6.4 5.2h2.8l1.2 3-1.6 1.6c1.2 2.2 3 4 5.2 5.2l1.6-1.6 3 1.2v2.8c0 1-.8 1.8-1.8 1.8-6.2 0-11.2-5-11.2-11.2 0-1 .8-1.8 1.8-1.8Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              Phone
            </span>
            <p>+91 95741 69465</p>
          </div>

          <div className="contact-item">
            <span className="contact-label text-with-icon">
              <span className="inline-icon inline-icon-muted" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4.5 6.5h15c1.1 0 2 .9 2 2v7.8c0 1.1-.9 2-2 2h-15c-1.1 0-2-.9-2-2V8.5c0-1.1.9-2 2-2Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path
                    d="m4.6 8 7.4 5.2L19.4 8"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              Email
            </span>
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
