import { profile, stats } from '../data.js';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div>
          <p className="kicker">{profile.location}</p>
          <h1>{profile.name}</h1>
          <p className="lede">{profile.tagline}</p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-solid">Get in touch</a>
            <a href={profile.resumeUrl} download className="btn btn-outline">Download résumé</a>
          </div>
        </div>
        <div className="portrait-wrap">
          <div className="portrait-ring">
            <img src={profile.photo} alt={profile.name} width="290" height="290" />
          </div>
        </div>
      </div>
      <div className="wrap">
        <div className="stats-strip">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <span className="num">{s.num}</span>
              <span className="lbl">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
