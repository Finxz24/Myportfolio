import { DEFAULT_PROJECTS } from '../constants/projects';

function formatProjectDate(date) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function ProjectCard({ project, index }) {
  const technologies = project.technologies
    ? project.technologies.split(',').map((tech) => tech.trim()).filter(Boolean)
    : [];

  return (
    <div className="project-card">
      <img className="project-img" src={project.image} alt={project.name} />
      <div className="project-overlay">
        <div className="project-head">
          <div className="project-tag">{project.tag}</div>
          <div className="project-num">{String(index + 1).padStart(2, '0')}</div>
        </div>
        <div className="project-name">{project.name}</div>
        {project.date ? <div className="project-date">{formatProjectDate(project.date)}</div> : null}
        <div className="project-desc">{project.desc}</div>
        {technologies.length > 0 && (
          <div className="project-tech">
            {technologies.map((tech) => (
              <span key={tech} className="project-tech-tag">{tech}</span>
            ))}
          </div>
        )}
        {project.link && (
          <div className="project-link">
            <a href={project.link} target="_blank" rel="noreferrer">View Project →</a>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Work() {
  return (
    <section id="projects">
      <div className="work-header">
        <h2 className="section-title">Projects</h2>
      </div>
      <div className="projects-grid">
        {DEFAULT_PROJECTS.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
