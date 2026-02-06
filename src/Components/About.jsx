import './About.css'

const highlights = [
  'Full-stack MERN developer with Next.js experience',
  'Focus on clean UI, solid APIs, and smooth UX',
  'Always learning and shipping consistently',
]

const stats = [
  { label: 'Experience', value: '1 year' },
  { label: 'Fintech (FT)', value: '7 months' },
  { label: 'MERN Internship', value: '6 months' },
]

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <p className="about-eyebrow">About</p>
        <h2 className="about-title">
          Full-stack developer focused on modern MERN + Next.js builds.
        </h2>
        <p className="about-lede">
          I&apos;m a full-stack developer with professional experience in MERN and
          Next.js, including work at a fintech firm as a full-stack developer
          and a paid MERN-stack internship. I enjoy building clean, scalable
          applications with a strong focus on code quality, performance, and
          real-world functionality.
        </p>

        <ul className="about-highlights">
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="about-actions">
          <a className="about-btn primary" href="#contact">
            Let&apos;s talk
          </a>
          <a className="about-btn ghost" href="#project">
            View projects
          </a>
        </div>
      </div>

      <div className="about-card">
        <div className="about-photo">
          <img src="/images/arshad.jpg" alt="Muhammed Arshad" />
        </div>
        <div className="about-card-header">
          <h3>Quick facts</h3>
          <span>Updated 2026</span>
        </div>
        <div className="about-education">
          <p className="education-label">Education</p>
          <p className="education-value">BCA Graduate, 2024</p>
          <p className="education-meta">University of Calicut</p>
        </div>
        <div className="about-stats">
          {stats.map((stat) => (
            <div key={stat.label} className="about-stat">
              <p className="value">{stat.value}</p>
              <p className="label">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="about-card-footer">
          <p>
            I&apos;m growing fast through hands-on projects and real product work.
          </p>
        </div>
      </div>
    </section>
  )
}
