import './Contact.css'

const contactItems = [
  { label: 'Name', value: 'Muhammed Arshad A' },
  { label: 'Place', value: 'Malappuram, Kerala' },
  { label: 'Phone', value: '9744855105', href: 'tel:9744855105' },
  { label: 'Email', value: 'muhammedarshad898@gmail.com', href: 'mailto:muhammedarshad898@gmail.com' },
  {
    label: 'GitHub',
    value: 'muhammedarshad898',
    href: 'https://github.com/muhammedarshad898?tab=repositories',
  },
  {
    label: 'LinkedIn',
    value: 'muhammed-arshad',
    href: 'https://www.linkedin.com/in/muhammed-arshad-845155338/',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-header">
        <p className="contact-eyebrow">Contact</p>
        <h2 className="contact-title">Let&apos;s connect and collaborate.</h2>
        <p className="contact-subtitle">
          Reach out for project work, collaborations, or full-time opportunities.
        </p>
      </div>

      <div className="contact-grid">
        {contactItems.map((item) => (
          <div key={item.label} className="contact-card">
            <p className="contact-label">{item.label}</p>
            {item.href ? (
              <a className="contact-value" href={item.href}>
                {item.value}
              </a>
            ) : (
              <p className="contact-value">{item.value}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
