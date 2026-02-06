import './Skills.css'

const skills = [
  { title: 'Frontend', items: ['React', 'Next.js', 'Vite', 'HTML5', 'CSS3'] },
  { title: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth'] },
  { title: 'Database', items: ['MongoDB', 'Mongoose', 'CRUD'] },
  { title: 'Tools', items: ['Git & GitHub', 'Postman', 'VS Code', 'Vercel', 'Render'] },
]

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-header">
        <p className="skills-eyebrow">Skills</p>
        <h2 className="skills-title">MERN + Next.js toolkit</h2>
        <p className="skills-subtitle">
          Clean, modern stack focused on real-world full-stack delivery.
        </p>
      </div>

      <div className="skills-grid">
        {skills.map((group) => (
          <article key={group.title} className="skills-card">
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
