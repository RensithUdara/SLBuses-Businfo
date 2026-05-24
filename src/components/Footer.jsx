import React from 'react'
import { Link } from 'react-router-dom'
import { Bus, ExternalLink } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section footer-brand">
            <div className="footer-logo">
              <Bus size={30} />
              <h3>SLBuses</h3>
            </div>
            <p>Simple Sri Lankan bus planning with fare-stage tools, major stops, and official source links.</p>
          </div>

          <div className="footer-section">
            <h4>Plan</h4>
            <ul>
              <li><Link to="/normalfare">Fare Calculator</Link></li>
              <li><Link to="/faretable">Fare Table</Link></li>
              <li><Link to="/findroutes">Route Search</Link></li>
              <li><Link to="/stops">Stop Directory</Link></li>
              <li><Link to="/normalwaytimes">Timetables</Link></li>
              <li><Link to="/standnumbers">Stand Numbers</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/contact">Report Data Issue</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Sources</h4>
            <ul>
              <li>
                <a href="https://ntc.gov.lk/Bus_info/bus_fares.php?lang=en" target="_blank" rel="noreferrer">
                  NTC Fare Tables <ExternalLink size={14} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 SLBuses. Independent travel-planning tool for Sri Lankan bus passengers.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
