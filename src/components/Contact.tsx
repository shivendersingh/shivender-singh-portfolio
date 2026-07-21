import { Mail, Phone, MapPin, Github, Linkedin, Download } from 'lucide-react'
import { person } from '../data/portfolio'
import './Contact.css'

export default function Contact() {
  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <p className="section-label">Get in Touch</p>
        <h2 className="section-title" id="contact-title">Let's Connect</h2>
        <p className="section-desc">
          Open to SDET, QA Automation, and AI Quality Engineering opportunities. Feel free to reach out directly.
        </p>

        <div className="contact__grid">
          {/* Contact details */}
          <div className="contact__details">
            <ul className="contact__list" role="list">
              <li className="contact__item">
                <Mail size={16} className="contact__icon" aria-hidden="true" />
                <div>
                  <p className="contact__label">Primary Email</p>
                  <a href={`mailto:${person.email}`} className="contact__value">{person.email}</a>
                </div>
              </li>
              <li className="contact__item">
                <Mail size={16} className="contact__icon" aria-hidden="true" />
                <div>
                  <p className="contact__label">Secondary Email</p>
                  <a href={`mailto:${person.emailAlt}`} className="contact__value">{person.emailAlt}</a>
                </div>
              </li>
              <li className="contact__item">
                <Phone size={16} className="contact__icon" aria-hidden="true" />
                <div>
                  <p className="contact__label">Phone</p>
                  <a href={`tel:${person.phone.replace(/\s/g, '')}`} className="contact__value">{person.phone}</a>
                </div>
              </li>
              <li className="contact__item">
                <MapPin size={16} className="contact__icon" aria-hidden="true" />
                <div>
                  <p className="contact__label">Location</p>
                  <p className="contact__value">{person.location}</p>
                </div>
              </li>
            </ul>

            {/* Social links */}
            <div className="contact__socials">
              {person.github ? (
                <a href={person.github} className="contact__social-btn" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
                  <Github size={18} aria-hidden="true" />
                  <span>GitHub</span>
                </a>
              ) : (
                <span className="contact__social-btn contact__social-btn--placeholder" aria-label="GitHub link not yet configured">
                  <Github size={18} aria-hidden="true" />
                  <span>GitHub</span>
                  <span className="contact__placeholder-badge mono">add URL</span>
                </span>
              )}
              {person.linkedin ? (
                <a href={person.linkedin} className="contact__social-btn" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
                  <Linkedin size={18} aria-hidden="true" />
                  <span>LinkedIn</span>
                </a>
              ) : (
                <span className="contact__social-btn contact__social-btn--placeholder" aria-label="LinkedIn link not yet configured">
                  <Linkedin size={18} aria-hidden="true" />
                  <span>LinkedIn</span>
                  <span className="contact__placeholder-badge mono">add URL</span>
                </span>
              )}
            </div>
          </div>

          {/* CTA panel */}
          <div className="contact__cta">
            <div className="contact__cta-inner">
              <div className="contact__cta-dot" aria-hidden="true" />
              <h3 className="contact__cta-title">Ready to discuss a role?</h3>
              <p className="contact__cta-body">
                Send a message directly — I respond promptly to relevant opportunities and conversations about testing, automation strategy, and AI quality engineering.
              </p>
              <a
                href={`mailto:${person.email}?subject=SDET%20Opportunity&body=Hi%20Shivender%2C`}
                className="btn btn--primary contact__cta-btn"
              >
                <Mail size={16} aria-hidden="true" />
                Send an Email
              </a>
              <a
                href={person.resumeFile}
                download="ShivenderSingh-Resume.pdf"
                className="btn btn--outline"
              >
                <Download size={16} aria-hidden="true" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="contact__footer">
        <div className="container">
          <p className="contact__footer-text mono">
            © 2026 Shivender Singh — Senior SDET &amp; QA Automation Engineer
          </p>
        </div>
      </div>
    </section>
  )
}
