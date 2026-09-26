import { skillGroups } from '../data.js';

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <div className="sec-head">
          <span className="num">02</span>
          <h2>Skills</h2>
          <p>A mix of programming fundamentals, applied AI, and the tools I use to design and ship ideas.</p>
        </div>
        <div className="skill-groups">
          {skillGroups.map((g) => (
            <div className="skill-group" key={g.category}>
              <div className="cat">{g.category}</div>
              <div className="tag-row">
                {g.skills.map((s) => <span key={s}>{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
