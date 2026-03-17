import { projects } from "../data/siteData";
import { FaCalendarDays, FaListCheck, FaLaptopCode } from "react-icons/fa6";
import { FaCss3Alt, FaJs, FaReact, FaDiagramProject } from "react-icons/fa6";
import { SiPhp, SiMysql } from "react-icons/si";
import { useState, useEffect } from "react";

function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  // 🔥 Scroll logic (MAIN FEATURE)
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("projects");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const scrollProgress = -rect.top;
      const sectionHeight = window.innerHeight;

      const index = Math.floor(scrollProgress / sectionHeight);

      if (index >= 0 && index < projects.length) {
        setActiveIndex(index);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Icons mapping
  const stackIconMap = new Map([
    ["React", FaReact],
    ["JavaScript", FaJs],
    ["CSS", FaCss3Alt],
    ["PHP", SiPhp],
    ["MySQL", SiMysql],
    ["Context API", FaDiagramProject],
  ]);

  const getProjectIcon = (title) => {
    const value = title.toLowerCase();
    if (value.includes("portfolio")) return FaLaptopCode;
    if (value.includes("event")) return FaCalendarDays;
    if (value.includes("to-do") || value.includes("todo")) return FaListCheck;
    return FaLaptopCode;
  };

  return (
    <section
      id="projects"
      className="projects-section"
      style={{ height: `${projects.length * 100}vh` }} // 🔥 IMPORTANT
    >
      <div className="projects-container">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className={`project-card ${
              index === activeIndex ? "active" : ""
            }`}
          >
            {/* LEFT SIDE IMAGE */}
            <div className="project-media">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            </div>

            {/* RIGHT SIDE CONTENT */}
            <div className="project-body">
              <h2>
                {(() => {
                  const Icon = getProjectIcon(project.title);
                  return <Icon size={20} />;
                })()}{" "}
                {project.title}
              </h2>

              <p>{project.description}</p>

              {/* STACK */}
              <div className="chip-row">
                {project.stack.map((item) => {
                  const Icon = stackIconMap.get(item);
                  return (
                    <span key={item}>
                      {Icon && <Icon size={16} />} {item}
                    </span>
                  );
                })}
              </div>

              {/* BUTTONS */}
              <div className="project-links">
                <a href={project.live} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;