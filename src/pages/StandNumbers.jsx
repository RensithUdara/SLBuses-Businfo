import React, { useState } from 'react'
import { MapPin, Search, Navigation } from 'lucide-react'
import { findRouteByNumber } from '../data/busData'

const StandNumbers = () => {
  const [terminal, setTerminal] = useState('')
  const [route, setRoute] = useState('')
  const [result, setResult] = useState(null)
  const [searched, setSearched] = useState(false)

  const handleSearch = (e) => {
    e.preventDefault()
    const foundRoute = findRouteByNumber(route)
    const terminalName = terminal.toLowerCase()
    const standEntry = foundRoute && Object.entries(foundRoute.terminals).find(([place]) => place.toLowerCase().includes(terminalName))
    setResult(foundRoute ? { route: foundRoute, stand: standEntry?.[1] || Object.values(foundRoute.terminals)[0] } : null)
    setSearched(true)
  }

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="container">
          <h1><span className="emoji-mark">🚏</span> Bus Stand Numbers</h1>
          <p>Find the exact bus stand or bay for your route at major terminals</p>
        </div>
      </div>

      <section className="search-section">
        <div className="container">
          <div className="search-card">
            <h2><span className="emoji-mark">📍</span> Search Stand Numbers</h2>
            <form onSubmit={handleSearch} className="search-form">
              <div className="form-group">
                <label htmlFor="terminal">
                  <Navigation size={20} />
                  Bus Terminal
                </label>
                <select
                  id="terminal"
                  value={terminal}
                  onChange={(e) => setTerminal(e.target.value)}
                  required
                >
                  <option value="">Select a terminal</option>
                  <option value="pettah">Pettah Central Bus Stand</option>
                  <option value="fort">Fort Bus Stand</option>
                  <option value="bastian">Bastian Mawatha</option>
                  <option value="kaduwela">Kaduwela</option>
                  <option value="maharagama">Maharagama</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="route">
                  <MapPin size={20} />
                  Route Number
                </label>
                <input
                  type="text"
                  id="route"
                  placeholder="Enter route number"
                  value={route}
                  onChange={(e) => setRoute(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                <Search size={20} />
                Find Stand
              </button>
            </form>

            {searched && (
              result ? (
                <div className="result-card">
                  <p className="result-eyebrow">Stand result</p>
                  <h3>{result.stand}</h3>
                  <p>Route {result.route.number}: {result.route.name}</p>
                  <p className="result-note">Terminal bays change during traffic control and special operations. Use this as planning guidance.</p>
                </div>
              ) : (
                <div className="result-card error-card">No stand information found for this route in the local dataset.</div>
              )
            )}
          </div>

          <div className="info-grid">
            <div className="info-card">
              <h3>🏢 Major Terminals</h3>
              <p>Coverage of all major bus terminals across Sri Lanka</p>
            </div>
            <div className="info-card">
              <h3>📍 Exact Locations</h3>
              <p>Find the precise stand or bay number for your bus</p>
            </div>
            <div className="info-card">
              <h3>⚡ Save Time</h3>
              <p>Navigate large terminals quickly and efficiently</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default StandNumbers
