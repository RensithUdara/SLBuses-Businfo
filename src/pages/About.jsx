import React from 'react'
import { CheckCircle, Database, Shield, Users } from 'lucide-react'
import { fareRevision, officialTransportAuthorities } from '../data/busData'

const About = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="container">
          <h1><span className="emoji-mark">🚌</span> About SLBuses</h1>
          <p>An independent Sri Lankan bus planning interface built around fares, stops, routes, and official source links.</p>
        </div>
      </div>

      <section className="content-section">
        <div className="container">
          <div className="content-card">
            <h2><span className="emoji-mark">🇱🇰</span> What SLBuses Is</h2>
            <p>
              SLBuses helps passengers make quick pre-travel decisions: estimate a fare, identify likely routes,
              check common timetable guidance, and find the right official authority for confirmations or complaints.
              It is designed for commuters, students, visitors, and everyday passengers who need clear bus information
              without searching through multiple pages.
            </p>
            <p>
              SLBuses is not an official government website. It is an independent planning tool that references official
              Sri Lankan transport sources and uses a structured local dataset for the app experience.
            </p>
          </div>

          <div className="features-grid about-feature-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Shield size={48} />
              </div>
              <h3>🏛️ Official Source Awareness</h3>
              <p>Fare references point to the National Transport Commission and authority contacts are listed with official websites.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <CheckCircle size={48} />
              </div>
              <h3>✅ Clear Results</h3>
              <p>The app shows matched route, stage count, bus type, and fare, and avoids pretending when a route is not in the dataset.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Database size={48} />
              </div>
              <h3>🗂️ Expandable Dataset</h3>
              <p>The stop catalog covers all 25 districts with major town and stand stops. Route-stage coverage can grow over time.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Users size={48} />
              </div>
              <h3>🧑‍🤝‍🧑 Passenger First</h3>
              <p>Forms are built around how passengers think: start place, destination, service type, timetable, and stand number.</p>
            </div>
          </div>

          <div className="content-card">
            <h2><span className="emoji-mark">📚</span> Data Sources and Method</h2>
            <p>
              The fare-stage calculator uses the National Transport Commission fare revision reference listed in the app:
              effective {fareRevision.effectiveDate}. Route, stand, and timetable entries are bundled as local structured
              data for demonstration and planning use.
            </p>
            <ul>
              <li><strong>Fare reference:</strong> National Transport Commission fare documents and fare-stage tables.</li>
              <li><strong>Authority references:</strong> NTC, SLTB, and Ministry contact pages for official follow-up.</li>
              <li><strong>Local planning data:</strong> Major Sri Lankan towns, bus stands, route examples, stages, and common departure times.</li>
              <li><strong>Accuracy policy:</strong> When exact route-stage data is missing, SLBuses shows suggestions or asks for official fare-stage input.</li>
            </ul>
          </div>

          <div className="content-card">
            <h2><span className="emoji-mark">🏛️</span> Official Transport Bodies Referenced</h2>
            <div className="authority-grid">
              {officialTransportAuthorities.map((authority) => (
                <div className="authority-card" key={authority.name}>
                  <h3>{authority.name}</h3>
                  <p>{authority.role}</p>
                  <a href={authority.website} target="_blank" rel="noreferrer">Visit {authority.shortName}</a>
                </div>
              ))}
            </div>
          </div>

          <div className="content-card">
            <h2><span className="emoji-mark">⚠️</span> Important Disclaimer</h2>
            <p>
              Use SLBuses as a planning aid. For legal complaints, final fare disputes, route permits, service changes,
              and official confirmations, contact the relevant Sri Lankan transport authority directly.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
