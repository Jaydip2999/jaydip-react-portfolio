import SocialLinks from "./SocialLinks";

function Footer() {
  return (
    <footer className="footer reveal">
      <h3>Jaydip Dumraliya</h3>
      <p className="footer-note">Building thoughtful web experiences with quality and consistency.</p>

      <SocialLinks className="footer-social" />

      <p className="footer-copy">
        <span className="copyright-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5Zm0 1.8a7.45 7.45 0 1 1 0 14.9 7.45 7.45 0 0 1 0-14.9Zm.1 3.43c2.02 0 3.2 1.25 3.52 2.63h-1.9c-.19-.53-.67-1.03-1.6-1.03-1.17 0-1.97.87-1.97 2.43 0 1.55.8 2.42 1.98 2.42.9 0 1.37-.43 1.59-1h1.9c-.31 1.31-1.44 2.6-3.49 2.6-2.41 0-3.93-1.68-3.93-4.02 0-2.35 1.54-4.03 3.9-4.03Z"
            />
          </svg>
        </span>
        2026 Jaydip Dumraliya. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
