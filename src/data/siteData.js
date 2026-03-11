import projectPortfolio from "../assets/project-portfolio.svg";
import projectEvents from "../assets/project-events.svg";
import projectTodo from "../assets/project-todo.svg";
import certWebDev from "../assets/cert-web-dev.svg";
import certMern from "../assets/cert-mern.svg";
import certSql from "../assets/cert-sql.svg";

const skillGroups = [
  {
    title: "Frontend Engineering",
    intro: "Responsive UI with modern frontend tools.",
    items: ["React (Learning)", "JavaScript", "HTML5", "CSS3", "Tailwind"],
  },
  {
    title: "Backend and APIs",
    intro: "Learning backend and API basics.",
    items: ["Node.js (Learning)", "Express (Learning)", "REST APIs (Basic)", "MongoDB (Basic)", "JWT"],
  },
  {
    title: "Delivery Tooling",
    intro: "Version control and deployment.",
    items: ["Git", "GitHub", "Netlify"],
  },
];

const experiences = [
  {
    period: "2023 - 2024",
    role: "Web Development Learning",
    org: "College + Self-Paced",
    details:
      "Learned core web tech (HTML, CSS, JavaScript) and basic backend concepts while studying with my friend.",
  },
  {
    period: "2024 - 2025",
    role: "Personal Projects",
    org: "Self-Learning + Classmate",
    details:
      "Built mini web apps and dashboards together, focusing on CRUD, authentication flows, and clean responsive layouts.",
  },
  {
    period: "2025 - Present",
    role: "Web Developer Intern",
    org: "Tripple One Studio",
    details:
      "Working on responsive UI builds and feature updates with HTML, CSS, JavaScript, PHP, and MySQL. Fixing bugs, improving pages, and supporting delivery with my classmate teammate.",
  },
];

const services = [
  {
    title: "Portfolio and Business Websites",
    description: "Professional websites that are fast, responsive, and aligned with your brand identity.",
  },
  {
    title: "Frontend Development",
    description: "React-based interfaces with reusable components, smooth UX, and clean architecture.",
  },
  {
    title: "API and Backend Integration",
    description: "Integration of APIs, authentication, and data workflows for production-ready web apps.",
  },
];

const projects = [
  {
    title: "Personal Portfolio Website",
    description: "A responsive personal portfolio built using React to showcase my skills, projects, and experience.",
    stack: ["React", "JavaScript", "CSS"],
    live: "#",
    github: "https://github.com/Jaydip2999/personal-portfolio",
    image: projectPortfolio,
    tag: "UI/UX",
  },
  {
    title: "Event Management System",
    description:
      "A full-featured web application to create, manage and book events. Users can view event details, register, and manage bookings with authentication and validation.",
    stack: ["PHP", "MySQL", "JavaScript", "CSS"],
    live: "https://uttsavevent.free.nf/",
    github: "https://github.com/Jaydip2999/uttsav-event-management",
    image: projectEvents,
    tag: "Full Stack",
  },
  {
    title: "To-Do",
    description: "Task tracking app with clean workflows and quick filtering for daily focus.",
    stack: ["React", "Context API", "CSS"],
    live: "https://jaydip2999.github.io/to-do-list/",
    github: "https://github.com/Jaydip2999/to-do-list",
    image: projectTodo,
    tag: "Productivity",
  },
];

const certifications = [
  {
    year: "2024",
    title: "Web Development",
    issuer: "CodeWithHarry",
    image: certWebDev,
    badge: "Hands-on Projects",
  },
  {
    year: "2025",
    title: "MERN Stack Development",
    issuer: "GeeksForGeeks",
    image: certMern,
    badge: "Capstone Delivery",
  },
  {
    year: "2025",
    title: "SQL",
    issuer: "GeeksForGeeks",
    image: certSql,
    badge: "Query Mastery",
  },
];

const testimonials = [
  {
    quote: "Delivered clean UI work on time and adapted quickly to feedback.",
    name: "Team Lead",
    role: "Tripple One Studio",
  },
  {
    quote: "Strong ownership on frontend tasks with good attention to detail.",
    name: "Project Mentor",
    role: "Freelance Collaboration",
  },
  {
    quote: "Communicates clearly and keeps progress transparent throughout delivery.",
    name: "Client",
    role: "Portfolio Project",
  },
];

const workProcess = [
  {
    step: "01",
    title: "Requirement Understanding",
    details: "Clarify goals, scope, and constraints before implementation starts.",
  },
  {
    step: "02",
    title: "Design and Planning",
    details: "Break work into milestones and prepare UI/feature execution plan.",
  },
  {
    step: "03",
    title: "Build and Iterate",
    details: "Develop in small increments, test continuously, and refine quickly.",
  },
  {
    step: "04",
    title: "Review and Delivery",
    details: "Final QA, fixes, and handoff with clear next-step recommendations.",
  },
];

const educationTimeline = [
  {
    year: "2023",
    track: "Academics",
    title: "Logic & Fundamentals",
    details:
      "Built a solid base in C/C++ and discrete problem-solving while settling into BCA coursework.",
  },
  {
    year: "2024",
    track: "Core CS",
    title: "OOP & Structured Thinking",
    details: "Focused on Java, OOP patterns, and clean code habits through console and lab projects.",
  },
  {
    year: "2025",
    track: "Web Track",
    title: "Backend & Dynamic Web",
    details: "Built PHP-driven pages, learned SQL flows, and practiced CRUD features end-to-end.",
  },
  {
    year: "2026",
    track: "Professional",
    title: "Modern Stack Growth",
    details: "Expanded into C#, ASP.NET basics, and development workflows used in real teams.",
  },
  {
    year: "Now",
    track: "Upskilling",
    title: "Full-Stack Readiness",
    details: "Building MERN projects, polishing UI/UX, and shipping features with quality checks.",
  },
];

export {
  certifications,
  educationTimeline,
  experiences,
  projects,
  services,
  skillGroups,
  testimonials,
  workProcess,
};
