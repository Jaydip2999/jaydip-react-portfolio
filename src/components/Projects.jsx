import { projects } from "../data/siteData";
import { FaCalendarDays, FaListCheck, FaLaptopCode } from "react-icons/fa6";
import { FaCss3Alt, FaJs, FaReact, FaDiagramProject } from "react-icons/fa6";
import { SiPhp, SiMysql } from "react-icons/si";

function Projects() {
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
    <section id="projects" className="projects-section section reveal">
      <h2 className="section-title">
        <span className="section-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <rect x="3.5" y="4" width="7.5" height="7.5" rx="1.8" stroke="currentColor" strokeWidth="1.6" />
            <rect x="13" y="4" width="7.5" height="7.5" rx="1.8" stroke="currentColor" strokeWidth="1.6" />
            <rect x="3.5" y="13.5" width="7.5" height="7.5" rx="1.8" stroke="currentColor" strokeWidth="1.6" />
            <rect x="13" y="13.5" width="7.5" height="7.5" rx="1.8" stroke="currentColor" strokeWidth="1.6" />
          </svg>
        </span>
        Featured Work
      </h2>
      <p className="section-subtitle">A quick look at projects that reflect my delivery and design taste.</p>

      <div className="projects-container">
        {projects.map((project, index) => (
          <article key={project.title} className="project-card" style={{ "--delay": `${index * 0.1}s` }}>
            <div className="project-media">
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className="project-image"
                loading="lazy"
              />
              <span className="project-tag">{project.tag}</span>
            </div>

            <div className="project-body">
              <h3 className="text-with-icon">
                <span className="inline-icon" aria-hidden="true">
                  {(() => {
                    const Icon = getProjectIcon(project.title);
                    return <Icon size={18} />;
                  })()}
                </span>
                {project.title}
              </h3>
              <p>{project.description}</p>
              <div className="chip-row">
                {project.stack.map((item) => (
                  <span key={item}>
                    {(() => {
                      const Icon = stackIconMap.get(item);
                      return Icon ? (
                        <span className="chip-icon" aria-hidden="true">
                          <Icon size={20} />
                        </span>
                      ) : null;
                    })()}
                    {item}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.live} className="btn live" target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
                <a href={project.github} className="btn github" target="_blank" rel="noopener noreferrer">
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
