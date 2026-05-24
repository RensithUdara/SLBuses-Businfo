import React from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Database,
  DollarSign,
  MapPin,
  MessageCircle,
  Route,
  Shield,
  Table,
} from 'lucide-react'

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-badge">
                <CheckCircle size={16} />
                <span><span className="emoji-mark">🚌</span> Sri Lankan bus fares, routes, stops, and stands in one place</span>
              </div>
              <h1><span className="emoji-mark">🇱🇰</span> SLBuses helps you plan bus journeys with less guessing</h1>
              <p className="hero-subtitle">
                Select your province, district, and bus stop to estimate fares, discover route options,
                check common departure times, and find stand guidance using a growing local dataset
                with links to official Sri Lankan transport sources.
              </p>
              <div className="hero-buttons">
                <Link to="/normalfare" className="btn btn-primary">
                  Calculate Fare
                  <ArrowRight size={20} />
                </Link>
                <Link to="/findroutes" className="btn btn-secondary">
                  Find Routes
                </Link>
              </div>
              <div className="hero-features">
                <div className="feature-tag">
                  <CheckCircle size={16} />
                  <span><span className="emoji-mark">📍</span> All 25 districts</span>
                </div>
                <div className="feature-tag">
                  <CheckCircle size={16} />
                  <span><span className="emoji-mark">💰</span> NTC fare references</span>
                </div>
                <div className="feature-tag">
                  <CheckCircle size={16} />
                  <span><span className="emoji-mark">📱</span> Mobile friendly</span>
                </div>
              </div>
            </div>
            <div className="hero-image">
              <div className="image-placeholder">
                <Route size={100} className="placeholder-icon" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container">
          <h2><span className="emoji-mark">🧭</span> Built for everyday Sri Lankan bus travel</h2>
          <p className="section-subtitle">
            SLBuses focuses on the decisions passengers make before leaving home:
            where to board, what fare to expect, which route may fit, and which official source to check.
          </p>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">
                <MapPin size={40} />
              </div>
              <h3>25</h3>
              <p>📍 Districts in the stop selector</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <Database size={40} />
              </div>
              <h3>200+</h3>
              <p>🚏 Major town and stand stops</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <DollarSign size={40} />
              </div>
              <h3>350</h3>
              <p>💵 Fare stages supported</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <Clock size={40} />
              </div>
              <h3>24/7</h3>
              <p>⚡ Offline frontend access</p>
            </div>
          </div>
        </div>
      </section>

      <section className="why-choose">
        <div className="container">
          <h2><span className="emoji-mark">🛣️</span> Designed around the real travel flow</h2>
          <p className="section-subtitle">
            The app starts with locations people understand, then translates those choices into route and fare-stage guidance.
          </p>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <MapPin size={48} />
              </div>
              <h3>📍 Location-first search</h3>
              <p>Choose start and end locations by province, district, and bus stop instead of typing uncertain names.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <DollarSign size={48} />
              </div>
              <h3>💰 Fare-stage calculation</h3>
              <p>Calculate fares from matched route stages, with a manual official-stage fallback for routes still being added.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Shield size={48} />
              </div>
              <h3>🏛️ Official source links</h3>
              <p>Key fare and authority references point to NTC, SLTB, and Ministry channels for final verification.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="core-features">
        <div className="container">
          <h2><span className="emoji-mark">✨</span> What you can do with SLBuses</h2>
          <p className="section-subtitle">
            A focused toolkit for passengers, students, commuters, and anyone planning a public bus journey in Sri Lanka.
          </p>
          <div className="features-grid-large">
            <div className="feature-card-large">
              <div className="feature-image">
                <Route size={64} className="placeholder-icon" />
              </div>
              <h3>🧭 Find Route Options</h3>
              <p>Search major origin and destination stops and review route numbers, key towns, stages, and estimated normal fare.</p>
              <Link to="/findroutes" className="feature-link">
                Search Routes
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="feature-card-large">
              <div className="feature-image">
                <DollarSign size={64} className="placeholder-icon" />
              </div>
              <h3>💵 Estimate Bus Fares</h3>
              <p>Use route-stage matches or official fare-stage input for normal, semi-luxury, luxury, and super luxury services.</p>
              <Link to="/normalfare" className="feature-link">
                Calculate Fare
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="feature-card-large">
              <div className="feature-image">
                <Table size={64} className="placeholder-icon" />
              </div>
              <h3>📊 Compare Fare Stages</h3>
              <p>Look up any official fare stage and compare normal, semi-luxury, luxury, and super luxury prices.</p>
              <Link to="/faretable" className="feature-link">
                Open Fare Table
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="feature-card-large">
              <div className="feature-image">
                <Clock size={64} className="placeholder-icon" />
              </div>
              <h3>⏱️ Check Timetable Guidance</h3>
              <p>View common planning departure times for bundled routes and confirm final times with terminals or operators.</p>
              <Link to="/normalwaytimes" className="feature-link">
                View Schedules
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="feature-card-large">
              <div className="feature-image">
                <MapPin size={64} className="placeholder-icon" />
              </div>
              <h3>🚏 Browse Stop Directory</h3>
              <p>Explore major stops by province and district, with route-stage availability markers.</p>
              <Link to="/stops" className="feature-link">
                View Stops
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="feature-card-large">
              <div className="feature-image">
                <MessageCircle size={64} className="placeholder-icon" />
              </div>
              <h3>🏛️ Reach the Right Authority</h3>
              <p>Use the Contact page to find official NTC, SLTB, and Ministry contacts for complaints, route matters, and confirmations.</p>
              <Link to="/contact" className="feature-link">
                View Contacts
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="data-integrity">
        <div className="container">
          <h2><span className="emoji-mark">🔎</span> Transparent about data limits</h2>
          <p className="section-subtitle">
            SLBuses is an independent planning interface. It is not an official government website, and route-stage coverage grows as structured records are added.
          </p>
          <div className="integrity-grid">
            <div className="integrity-card">
              <div className="integrity-icon">
                <Shield size={48} />
              </div>
              <h3>🏛️ Official references</h3>
              <p>Fare references link to the National Transport Commission and authority contacts link to official public sources.</p>
            </div>
            <div className="integrity-card">
              <div className="integrity-icon">
                <Database size={48} />
              </div>
              <h3>🗂️ Structured local data</h3>
              <p>Locations, routes, stages, stands, and sample schedules are kept in readable datasets that can be expanded.</p>
            </div>
            <div className="integrity-card">
              <div className="integrity-icon">
                <CheckCircle size={48} />
              </div>
              <h3>✅ Clear fallbacks</h3>
              <p>When an exact route is not found, the app shows suggestions or asks for the official fare stage instead of guessing.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="how-to-use">
        <div className="container">
          <h2><span className="emoji-mark">🪄</span> Plan in three steps</h2>
          <p className="section-subtitle">Simple controls for fast checks before a journey.</p>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <div className="step-icon">
                <MapPin size={48} />
              </div>
              <h3>📍 Select locations</h3>
              <p>Pick start and end points by province, district, and bus stop.</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <div className="step-icon">
                <Route size={48} />
              </div>
              <h3>🧾 Review the match</h3>
              <p>Check the matched route, stages, fare, common stops, and possible alternatives.</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <div className="step-icon">
                <CheckCircle size={48} />
              </div>
              <h3>✅ Confirm before travel</h3>
              <p>Use official links or terminal/operator confirmation when travel timing or complaints matter.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2><span className="emoji-mark">🎫</span> Start with a fare check</h2>
          <p>Choose two stops, select the bus type, and let SLBuses find the best available route-stage match.</p>
          <div className="cta-buttons">
            <Link to="/normalfare" className="btn btn-primary">
              Calculate Fare
              <ArrowRight size={20} />
            </Link>
            <Link to="/about" className="btn btn-secondary">
              Learn About the Data
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
