import { projects } from '../../data/projects';
import './projects.css';

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects__inner">
        <h2 className="projects__heading">Projects</h2>
        <div className="projects__grid">
          {projects.map(({ id, title, description, techStack, githubUrl, liveUrl }) => (
            <article key={id} className="projects__card">
              <h3 className="projects__title">{title}</h3>
              <p className="projects__description">{description}</p>
              <ul className="projects__tags">
                {techStack.map((tech) => (
                  <li key={tech} className="projects__tag">
                    {tech}
                  </li>
                ))}
              </ul>
              <div className="projects__links">
                {githubUrl && (
                  <a
                    href={githubUrl}
                    className="projects__link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub ↗
                  </a>
                )}
                {liveUrl && (
                  <a
                    href={liveUrl}
                    className="projects__link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live ↗
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
