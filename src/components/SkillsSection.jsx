import { skillGroups } from "../data/siteData";

function SkillsSection() {
  return (
    <section id="skills" className="section reveal">
      <h2 className="section-title">Skills</h2>
      <p className="section-subtitle">
       Technologies I work with and currently learning.
      </p>

      <div className="skill-groups">
        {skillGroups.map((group, index) => (
          <article key={group.title} className="skill-group-card" style={{ "--delay": `${index * 0.08}s` }}>
            <h3>{group.title}</h3>
            <p className="group-intro">{group.intro}</p>
            <div className="chip-row">
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
