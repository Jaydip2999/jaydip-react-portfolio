import { useState } from "react";
import profileImg from "../assets/profile-img.jpeg";
import SocialLinks from "./SocialLinks";

function Hero() {
  const [isTiltActive, setIsTiltActive] = useState(false);
  const [tiltStyle, setTiltStyle] = useState({
    "--rx": "0deg",
    "--ry": "0deg",
    "--gx": "50%",
    "--gy": "50%",
  });

  const handleTiltMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const px = x / rect.width;
    const py = y / rect.height;
    const rotateY = (px - 0.5) * 16;
    const rotateX = (0.5 - py) * 16;

    setTiltStyle({
      "--rx": `${rotateX.toFixed(2)}deg`,
      "--ry": `${rotateY.toFixed(2)}deg`,
      "--gx": `${(px * 100).toFixed(0)}%`,
      "--gy": `${(py * 100).toFixed(0)}%`,
    });
  };

  const resetTilt = () => {
    setIsTiltActive(false);
    setTiltStyle({
      "--rx": "0deg",
      "--ry": "0deg",
      "--gx": "50%",
      "--gy": "50%",
    });
  };

  return (
    <section id="about" className="about section reveal">
      <div className="intro">
        <div
          className={`profile-tilt ${isTiltActive ? "is-active" : ""}`}
          style={tiltStyle}
          onMouseEnter={() => setIsTiltActive(true)}
          onMouseMove={handleTiltMove}
          onMouseLeave={resetTilt}
        >
          <span className="hero-orbit hero-orbit-a" aria-hidden="true" />
          <span className="hero-orbit hero-orbit-b" aria-hidden="true" />
          <span className="hero-badge hero-badge-top" aria-hidden="true">
            Available for Projects
          </span>
          <span className="hero-badge hero-badge-bottom" aria-hidden="true">
            React + Frontend
          </span>
          <div className="profile-pic">
            <img className="profile-photo" src={profileImg} alt="Jaydip profile" />
          </div>
        </div>

        <div className="hero-content">
          <p className="eyebrow">Full Stack Developer</p>

          <h1>
            Hi, I am Jaydip Dumraliya.
            <span className="gradient-name">I Build modern web products.</span>
          </h1>

          <p className="role-line">
            <span className="role-label">I am a </span>
            <span className="rotating-role" aria-label="Professional roles">
              <span>Web Developer</span>
              <span>Full Stack Developer</span>
              <span>Learning React & Node.js</span>
            </span>
          </p>

          <p className="about-text">
            I design and develop responsive, conversion-focused websites with clean code,
            strong performance, and polished user experience across all devices.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="resume-btn">
              View Portfolio
            </a>
            <a href="#contact" className="hire-btn">
              Start a Project
            </a>
          </div>

          <SocialLinks />

          <div className="skills" aria-label="Core skills">
            <span>React.js</span>
            <span>JavaScript</span>
            <span>Node.js</span>
            <span>Html</span>
            <span>MySql</span>
            <span>PHP</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
