import { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
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
  const [isLoading, setIsLoading] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 420);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isLoading) return undefined;

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
  }, [isLoading]);

  useEffect(() => {
    if (isLoading) return undefined;

    const experienceLists = Array.from(document.querySelectorAll(".experience-list"));
    if (experienceLists.length === 0) return undefined;

    const updateExperienceFill = () => {
      const viewportFocus = window.innerHeight * 0.35;
      const scrollY = window.scrollY + viewportFocus;

      experienceLists.forEach((list) => {
        const rect = list.getBoundingClientRect();
        const start = rect.top + window.scrollY;
        const end = start + rect.height;
        const progress = (scrollY - start) / Math.max(1, end - start);
        const clamped = Math.min(1, Math.max(0, progress));
        list.style.setProperty("--fill", `${(clamped * 100).toFixed(2)}%`);
      });
    };

    updateExperienceFill();
    window.addEventListener("scroll", updateExperienceFill, { passive: true });
    window.addEventListener("resize", updateExperienceFill);

    return () => {
      window.removeEventListener("scroll", updateExperienceFill);
      window.removeEventListener("resize", updateExperienceFill);
    };
  }, [isLoading]);

  useEffect(() => {
    if (isLoading) return undefined;

    const timelines = Array.from(document.querySelectorAll(".education-timeline"));
    if (timelines.length === 0) return undefined;

    let frameId = 0;

    const updateTimelineFill = () => {
      const viewportHeight = window.innerHeight;

      timelines.forEach((timeline) => {
        const rect = timeline.getBoundingClientRect();
        const startOffset = viewportHeight * 0.82;
        const totalDistance = rect.height + viewportHeight * 0.45;
        const travelled = startOffset - rect.top;
        const progress = travelled / Math.max(1, totalDistance);
        const clamped = Math.min(1, Math.max(0, progress));
        timeline.style.setProperty("--fill", `${(clamped * 100).toFixed(2)}%`);
      });
    };

    const handleTimelineScroll = () => {
      window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(updateTimelineFill);
    };

    updateTimelineFill();
    window.addEventListener("scroll", handleTimelineScroll, { passive: true });
    window.addEventListener("resize", handleTimelineScroll);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", handleTimelineScroll);
      window.removeEventListener("resize", handleTimelineScroll);
    };
  }, [isLoading]);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isLoading) {
    return (
      <div className="app-loader" role="status" aria-live="polite" aria-label="Loading portfolio">
        <div className="loader-panel">
          <div className="loader-badge">JD</div>
          <div className="loader-orbit" aria-hidden="true">
            <span className="loader-ring loader-ring-a" />
            <span className="loader-ring loader-ring-b" />
            <span className="loader-ring loader-ring-c" />
            <span className="loader-core" />
            <span className="loader-scan" />
          </div>
          <div className="loader-copy">
            <p className="loader-kicker">Portfolio Initializing</p>
            <h2 className="loader-title">Crafting the interface</h2>
            <p className="loader-text">Loading projects, motion, and the current visual theme.</p>
          </div>
          <div className="loader-progress" aria-hidden="true">
            <span />
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="app-shell">
        <Navbar />
        <main>
          <Hero />
          <SkillsSection />
          <Education />
          <Projects />
          <Experience />
          <Certifications />
          <Services />
          <Contact />
        </main>
        <Footer />

        <button
          type="button"
          className={`back-to-top ${showBackToTop ? "is-visible" : ""}`}
          onClick={handleBackToTop}
          aria-label="Back to top"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M12 5.5l-6.5 6.5 1.7 1.7L11 9.9V19h2V9.9l3.8 3.8 1.7-1.7L12 5.5z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </>
  );
}

export default App;
