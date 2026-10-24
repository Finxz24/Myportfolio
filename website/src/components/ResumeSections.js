import { AWARDS, EDUCATION, EXPERIENCE, INTERESTS, SKILL_GROUPS } from '../constants/resume';
import SkillIcon from './SkillIcon';

function Timeline({ items }) {
  return (
    <ol className="resume-list">
      {items.map((item) => (
        <li className="resume-item" key={`${item.title}-${item.dates}`}>
          <div>
            <h3 className="resume-title">{item.title}</h3>
            {item.org ? <p className="resume-org">{item.org}</p> : null}
            {item.text ? <p className="resume-text">{item.text}</p> : null}
          </div>
          <span className="resume-dates">{item.dates}</span>
        </li>
      ))}
    </ol>
  );
}

export function Experience() {
  return (
    <section id="experience">
      <h2 className="section-title">Experience</h2>
      {EXPERIENCE.length === 0 ? (
        <p className="resume-empty">Experience will be listed here.</p>
      ) : (
        <Timeline items={EXPERIENCE} />
      )}
    </section>
  );
}

export function Education() {
  return (
    <section id="education">
      <h2 className="section-title">Education</h2>
      <Timeline items={EDUCATION} />
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skill-groups">
        {SKILL_GROUPS.map((group) => (
          <div className="skill-group" key={group.label}>
            <h3 className="skill-group-label">{group.label}</h3>
            <ul className="skills-list">
              {group.items.map((item) => (
                <li className="skill-item" key={item}>
                  <SkillIcon name={item} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Interests() {
  return (
    <section id="interests">
      <h2 className="section-title">Interests</h2>
      <div className="interest-copy">
        {INTERESTS.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}

export function Awards() {
  return (
    <section id="awards">
      <h2 className="section-title">Awards</h2>
      {AWARDS.length === 0 ? (
        <p className="resume-empty">Awards and honors will be listed here.</p>
      ) : (
        <Timeline items={AWARDS} />
      )}
    </section>
  );
}
