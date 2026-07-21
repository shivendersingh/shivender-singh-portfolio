import { stackGroups } from '../data/portfolio'
import './TechStack.css'

export default function TechStack() {
  return (
    <section className="section ts" id="stack" aria-labelledby="ts-title">
      <div className="container">
        <p className="section-label">Technology Stack</p>
        <h2 className="section-title" id="ts-title">Automation &amp; AI Quality Stack</h2>
        <p className="section-desc">
          Tools and technologies applied across test automation, infrastructure, data validation, and AI quality engineering.
        </p>

        <div className="ts__groups">
          {stackGroups.map((group) => (
            <div key={group.label} className="ts__group">
              <h3 className="ts__group-label mono">{group.label}</h3>
              <div className="ts__tags" role="list" aria-label={group.label}>
                {group.tags.map((tag) => (
                  <span key={tag} className="tag" role="listitem">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
