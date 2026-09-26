import { profile, education } from '../data.js';

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="sec-head">
          <span className="num">01</span>
          <h2>About</h2>
        </div>
        <div className="about-grid">
          <div>
            {profile.bio.map((p, i) => <p key={i}>{p}</p>)}
            <div className="hobbies">
              {profile.hobbies.map((h) => <span key={h}>{h}</span>)}
            </div>
          </div>
          <div className="info-block">
            <div className="info-row"><div className="label">Location</div><div className="value">{profile.location}</div></div>
            <div className="info-row"><div className="label">Field</div><div className="value">Information Technology</div></div>
            <div className="info-row"><div className="label">Focus</div><div className="value">AI &amp; Data-driven products</div></div>
            <div className="info-row"><div className="label">Status</div><div className="value">Open to internships</div></div>
          </div>
        </div>

        <div className="edu-list">
          {education.map((e) => (
            <div className="edu-item" key={e.school}>
              <div className="yr">{e.years}</div>
              <div><div className="school">{e.school}</div><div className="deg">{e.degree}</div></div>
              <div className="score">{e.score}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
