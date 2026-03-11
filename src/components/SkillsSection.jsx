import { skillGroups } from "../data/siteData";
import { FaCss3Alt, FaHtml5, FaJs, FaNodeJs, FaServer } from "react-icons/fa6";
import {
  SiReact,
  SiExpress,
  SiGit,
  SiGithub,
  SiJsonwebtokens,
  SiMongodb,
  SiNetlify,
  SiTailwindcss,
} from "react-icons/si";

function SkillsSection() {
  const skillIconMap = new Map([
    ["React (Learning)", SiReact],
    ["JavaScript", FaJs],
    ["HTML5", FaHtml5],
    ["CSS3", FaCss3Alt],
    ["Tailwind", SiTailwindcss],
    ["Node.js (Learning)", FaNodeJs],
    ["Express (Learning)", SiExpress],
    ["REST APIs (Basic)", FaServer],
    ["MongoDB (Basic)", SiMongodb],
    ["JWT", SiJsonwebtokens],
    ["Git", SiGit],
    ["GitHub", SiGithub],
    ["Netlify", SiNetlify],
  ]);

  return (
    <section id="skills" className="section reveal">
      <h2 className="section-title">
        <span className="section-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M12 3.2 14.2 8l4.8 2.2-4.8 2.2L12 17l-2.2-4.6L5 10.2 9.8 8 12 3.2Z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
            <path d="M5 18.6h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </span>
        Skills
      </h2>
      <p className="section-subtitle">
        Core technologies and tools I use.
      </p>

      <div className="skill-tracks">
        {skillGroups.map((group, index) => (
          <article key={group.title} className="skill-track" style={{ "--delay": `${index * 0.08}s` }}>
            <div className="skill-head">
              <h3>{group.title}</h3>
              <span className="skill-count">{group.items.length} tools</span>
            </div>
            <p className="group-intro">{group.intro}</p>
            <div className="skill-tags">
              {group.items.map((item) => (
                <span key={item}>
                  {(() => {
                    const Icon = skillIconMap.get(item);
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
          </article>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
