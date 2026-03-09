function Projects() {
  return (
    <section id="projects" className="projects-section section reveal">
      <h2 className="section-title">Featured Work</h2>

      <div className="projects-container">
        <article className="project-card">
          <h3>Personal Portfolio Website</h3>
          <p>A responsive personal portfolio built using React to showcase my skills, projects, and experience.</p>
          <div className="chip-row">
            <span>React</span>
            <span>JavaScript</span>
            <span>CSS</span>
          </div>
          <div className="project-links">
            <a href="#" className="btn live">
              Live Demo
            </a>
            <a href="https://github.com/Jaydip2999/personal-portfolio" className="btn github" target="_blank" 
    rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </article>

        <article className="project-card">
          <h3>Event Management System</h3>
          <p>A full-featured web application to create, manage and book events.
Users can view event details, register for events, and manage bookings.
Includes authentication, form validation and database integration.</p>
          <div className="chip-row">
            <span>PHP</span>
            <span>MySQL</span>
            <span>JavaScript</span>
            <span>CSS</span>
          </div>
          <div className="project-links">
            <a href="https://uttsavevent.free.nf/" className="btn live" target="_blank">Live Demo</a>
            <a href="https://github.com/Jaydip2999/uttsav-event-management" className="btn github" target="_blank" 
    rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </article>

        <article className="project-card">
          <h3>To-Do</h3>
          <p>Task tracking app with clean workflows and quick filtering.</p>
          <div className="chip-row">
            <span>React</span>
            <span>Context API</span>
            <span>CSS</span>
          </div>
          <div className="project-links">
            <a href="https://jaydip2999.github.io/to-do-list/" className="btn live" target="_blank"    rel="noopener noreferrer">
              Live Demo
            </a>
            <a href="https://github.com/Jaydip2999/to-do-list" className="btn github" target="_blank" 
    rel="noopener noreferrer ">
              GitHub
            </a>
          </div>
        </article>

      </div>
    </section>
  );
}

export default Projects;
