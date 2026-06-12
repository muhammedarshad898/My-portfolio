import './Experience.css'

const experiences = [
  {
    company: 'Astronify Space',
    type: 'EdTech Startup',
    role: 'Full Stack Developer',
    duration: 'Feb 2026 – Present',
    location: 'Remote',
    bullets: [
      'Built and delivered a production-grade multi-role EdTech platform in Next.js end-to-end, working under a senior lead developer — now live with 100+ active users across 4 distinct roles.',
      'Architected role-specific dashboards and workflows for 4 user types (Learner, Creator, Recruiter, Admin) including course publishing, enrollment, job posting, and access control.',
      'Redesigned the entire platform UI from scratch, delivering a consistent design system across all user roles.',
      'Continue to maintain and support production code post-contract — responding to bug reports and shipping fixes on owned features.',
    ],
  },
  {
    company: 'Altiora Capital Solution Pvt Ltd (PaisaOnClick)',
    type: 'Fintech',
    role: 'Full Stack Developer',
    duration: 'May 2025 – Dec 2025',
    location: 'Ernakulam',
    bullets: [
      'Contributed to a production fintech CRM managing end-to-end loan lead lifecycle — from application to deal conversion — across 5 user roles (SM, RM, GM, Marketing Head, Admin).',
      'Integrated webhook-based lead ingestion pipeline to automatically capture and route loan applications from the public site into the CRM in real time.',
      'Integrated Signzy API for automated credit pulls triggered during loan application via PAN and mobile number — with results surfaced on the lead detail page within the CRM.',
      'Built and maintained role-specific dashboard views and UI components within an existing Next.js and Node.js codebase, working under a senior lead developer.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-header">
        <p className="experience-eyebrow">Experience</p>
        <h2 className="experience-title">Where I&apos;ve worked</h2>
        <p className="experience-subtitle">
          Production roles building real products with real users.
        </p>
      </div>

      <div className="experience-grid">
        {experiences.map((exp) => (
          <div key={exp.company} className="experience-card">
            <div className="experience-card-top">
              <div className="experience-card-info">
                <h3 className="experience-company">
                  {exp.company} <span className="experience-type">&middot; {exp.type}</span>
                </h3>
                <p className="experience-role">{exp.role}</p>
              </div>
              <div className="experience-meta">
                <span className="experience-duration">{exp.duration}</span>
                <span className="experience-location">{exp.location}</span>
              </div>
            </div>
            <ul className="experience-bullets">
              {exp.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
