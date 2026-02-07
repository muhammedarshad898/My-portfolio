import './Projects.css'

const projects = [
  {
    title: 'Mindpal',
    subtitle: 'Mental health platform with role-based access',
    description:
      'Role-based authentication for admin, users, and doctors with dedicated dashboards and logout support.',
    liveUrl: 'https://mindpal-frontend.vercel.app/',
    highlights: [
      'Admin: login (mentalhealth@gmail.com / admin123) + CRUD on doctor profiles, view all doctors and user appointments with search',
      'Users: register/login, take an initial mental health test, book appointments, post stories to a public feed',
      'Doctors: register/login, view assigned appointments',
    ],
  },
  {
    title: 'Projectfare',
    subtitle: 'Project management with personalized dashboards',
    description:
      'A full CRUD project workspace with profile updates, dashboards, and search across projects.',
    liveUrl: 'https://projectfare-frontend-theta.vercel.app/',
    highlights: [
      'Create, read, update, and delete projects',
      'Individual dashboards with logout functionality',
      'Profile updates and searchable project list',
    ],
  },
  {
    title: 'Student Management (SM)',
    subtitle: 'Teacher-focused CRUD app',
    description:
      'A basic management tool where teachers can manage student records end to end.',
    liveUrl: 'https://school-management-sm.vercel.app/',
    highlights: [
      'Teachers can create, read, update, and delete student details',
      'Search students by name or class',
      'Logout functionality for teachers',
    ],
  },
]

export default function Projects() {
  return (
    <section id="project" className="projects-section">
      <div className="projects-header">
        <p className="projects-eyebrow">Projects</p>
        <h2 className="projects-title">Selected work</h2>
        <p className="projects-subtitle">
          A snapshot of full-stack builds with real product features.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <div className="project-card-head">
              <div>
                <h3>{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
              </div>
              <span className="project-chip">Full-Stack</span>
            </div>

            <p className="project-description">{project.description}</p>

            <ul className="project-highlights">
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="project-actions">
              {project.liveUrl ? (
                <a
                  className="project-link"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              ) : (
                <span className="project-link disabled">Live demo soon</span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
