import { skillGroups } from "../data/siteData";

function SkillsSection() {
  return (
    <section id="skills" className="section reveal">
      <h2 className="section-title">Skills</h2>
      <p className="section-subtitle">
       Technologies I work with and currently learning.
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
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
