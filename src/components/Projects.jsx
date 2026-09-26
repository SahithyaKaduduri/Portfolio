import { projects } from '../data.js';
import { useTilt } from '../useTilt.js';

function ProjectCard({ p }) {
  const tiltRef = useTilt();
  return (
    <div className="project tilt" ref={tiltRef}>
      <div><div className="p-meta">{p.meta}</div></div>
      <div>
        <h3 className="p-title">{p.title}</h3>
        <p className="p-desc">{p.description}</p>
        <div className="p-stack">
          {p.stack.map((s) => <span key={s}>{s}</span>)}
        </div>
        {p.codeUrl && (
          <div className="p-links">
            <a href={p.codeUrl} target="_blank" rel="noopener noreferrer">View code on GitHub</a>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <div className="sec-head">
          <span className="num">03</span>
          <h2>Projects</h2>
          <p>Hackathons and independent builds — most made under a 24-hour clock.</p>
        </div>

        {projects.map((p) => <ProjectCard p={p} key={p.title} />)}
      </div>
    </section>
  );
}
