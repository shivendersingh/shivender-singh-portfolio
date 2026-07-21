import { Award } from 'lucide-react'
import { certifications } from '../data/portfolio'
import './Certifications.css'

export default function Certifications() {
  return (
    <section className="section certs" id="certifications" aria-labelledby="certs-title">
      <div className="container">
        <p className="section-label">Credentials</p>
        <h2 className="section-title" id="certs-title">Certifications &amp; Training</h2>

        <ul className="certs__list" role="list">
          {certifications.map((cert) => (
            <li key={cert.title} className={`certs__item${cert.highlight ? ' certs__item--highlight' : ''}`}>
              <Award
                size={16}
                className={`certs__icon${cert.highlight ? ' certs__icon--highlight' : ''}`}
                aria-hidden="true"
              />
              <div className="certs__body">
                <p className="certs__title">{cert.title}</p>
                <p className="certs__issuer mono">{cert.issuer}{cert.year ? ` — ${cert.year}` : ''}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
