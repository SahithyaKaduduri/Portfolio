import { profile } from '../data.js';

export default function Contact() {
  return (
    <section id="contact">
      <div className="wrap contact-wrap">
        <div>
          <h2>Let's talk.</h2>
          <p>Whether it's an internship, a collaboration, or just a conversation about AI and design — my inbox is open.</p>
          <a href={`mailto:${profile.email}`} className="btn btn-solid">Say hello</a>
        </div>
        <ul className="contact-list">
          <li><span className="c-label">Email</span><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
          <li><span className="c-label">Phone</span><a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a></li>
          <li><span className="c-label">LinkedIn</span><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">kaduduri-sahithya</a></li>
          <li><span className="c-label">GitHub</span><a href={profile.github} target="_blank" rel="noopener noreferrer">SahithyaKaduduri</a></li>
        </ul>
      </div>
    </section>
  );
}
