import './Education.css'

const education = [
  {
    title: 'Bachelor of Computer Applications',
    institution: 'Calicut University, MCAS Vengara',
    location: 'Kerala',
    duration: '2021 – 2024',
  },
  {
    title: 'MERN Stack Intern (Paid)',
    institution: 'Luminar Technolab',
    location: 'Calicut',
    duration: 'Jun 2024 – Dec 2024',
    description:
      '6-month intensive paid internship covering the full MERN stack — built multiple full-stack projects applying JWT authentication, role-based access control, REST API design, and responsive UI development.',
  },
]

export default function Education() {
  return (
    <section id="education" className="education-section">
      <div className="education-header">
        <p className="education-eyebrow">Education</p>
        <h2 className="education-title">Where I learned</h2>
        <p className="education-subtitle">
          Formal education and hands-on training that built my foundation.
        </p>
      </div>

      <div className="education-card">
        {education.map((item, i) => (
          <div key={item.title}>
            {i > 0 && <hr className="education-divider" />}
            <div className="education-entry">
              <div className="education-entry-top">
                <div className="education-entry-info">
                  <h3 className="education-entry-title">{item.title}</h3>
                  <p className="education-institution">
                    {item.institution} <span className="education-loc">&middot; {item.location}</span>
                  </p>
                </div>
                <div className="education-meta">
                  <span className="education-duration">{item.duration}</span>
                </div>
              </div>
              {item.description && (
                <p className="education-description">{item.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
