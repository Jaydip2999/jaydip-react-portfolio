import { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Achievements from "./components/Achievements";
import SkillsSection from "./components/SkillsSection";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Services from "./components/Services";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Contact from "./components/contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, nextProgress)));
      setShowBackToTop(window.scrollY > 420);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const revealNodes = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
          } else {
            entry.target.classList.remove("reveal-visible");
          }
        });
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    revealNodes.forEach((node) => observer.observe(node));

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="scroll-progress" aria-hidden="true">
        <span style={{ width: `${scrollProgress}%` }} />
      </div>

      <div className="app-shell">
        <Navbar />
        <main>
          <Hero />
          <Achievements />
          <SkillsSection />
          <Experience />
          <Education />
          <Services />
          <Certifications />
          <Projects />
          <Contact />
        </main>
        <Footer />

        <button
          type="button"
          className={`back-to-top ${showBackToTop ? "is-visible" : ""}`}
          onClick={handleBackToTop}
          aria-label="Back to top"
        >
          Top
        </button>
      </div>
    </>
  );
}

export default App;
