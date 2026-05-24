import React, { useMemo, useState } from 'react'
import { MapPin, Search, ArrowRight } from 'lucide-react'
import { calculateFare, formatCurrency, getDistricts, getProvinces, getStops, searchRoutes, suggestRoutes } from '../data/busData'

const FindRoutes = () => {
  const [originProvince, setOriginProvince] = useState('')
  const [originDistrict, setOriginDistrict] = useState('')
  const [origin, setOrigin] = useState('')
  const [destinationProvince, setDestinationProvince] = useState('')
  const [destinationDistrict, setDestinationDistrict] = useState('')
  const [destination, setDestination] = useState('')
  const [results, setResults] = useState([])
  const [suggestions, setSuggestions] = useState([])
  const [searched, setSearched] = useState(false)

  const provinces = useMemo(() => getProvinces(), [])
  const originDistricts = useMemo(() => getDistricts(originProvince), [originProvince])
  const destinationDistricts = useMemo(() => getDistricts(destinationProvince), [destinationProvince])
  const originStops = useMemo(() => getStops(originProvince, originDistrict), [originProvince, originDistrict])
  const destinationStops = useMemo(() => getStops(destinationProvince, destinationDistrict), [destinationProvince, destinationDistrict])

  const handleSearch = (e) => {
    e.preventDefault()
    const matches = searchRoutes(origin, destination)
    setResults(matches)
    setSuggestions(matches.length ? [] : suggestRoutes(origin, destination))
    setSearched(true)
  }

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="container">
          <h1><span className="emoji-mark">🧭</span> Find Bus Routes</h1>
          <p>Search for bus routes across Sri Lanka with detailed stop information</p>
        </div>
      </div>

      <section className="search-section">
        <div className="container">
          <div className="search-card">
            <h2><span className="emoji-mark">🚌</span> Search Routes</h2>
            <form onSubmit={handleSearch} className="search-form">
              <div className="form-split">
                <div className="form-group">
                  <label htmlFor="originProvince">
                    <MapPin size={20} />
                    Start Province
                  </label>
                  <select id="originProvince" value={originProvince} onChange={(e) => {
                    setOriginProvince(e.target.value)
                    setOriginDistrict('')
                    setOrigin('')
                  }} required>
                    <option value="">Select province</option>
                    {provinces.map((province) => <option key={province} value={province}>{province}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="originDistrict">Start District</label>
                  <select id="originDistrict" value={originDistrict} onChange={(e) => {
                    setOriginDistrict(e.target.value)
                    setOrigin('')
                  }} required disabled={!originProvince}>
                    <option value="">Select district</option>
                    {originDistricts.map((district) => <option key={district} value={district}>{district}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="origin">Start Bus Stop</label>
                  <select id="origin" value={origin} onChange={(e) => setOrigin(e.target.value)} required disabled={!originDistrict}>
                    <option value="">Select bus stop</option>
                    {originStops.map((stop) => <option key={stop} value={stop}>{stop}</option>)}
                  </select>
                </div>
              </div>
              <div className="form-split">
                <div className="form-group">
                  <label htmlFor="destinationProvince">
                    <MapPin size={20} />
                    End Province
                  </label>
                  <select id="destinationProvince" value={destinationProvince} onChange={(e) => {
                    setDestinationProvince(e.target.value)
                    setDestinationDistrict('')
                    setDestination('')
                  }} required>
                    <option value="">Select province</option>
                    {provinces.map((province) => <option key={province} value={province}>{province}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="destinationDistrict">End District</label>
                  <select id="destinationDistrict" value={destinationDistrict} onChange={(e) => {
                    setDestinationDistrict(e.target.value)
                    setDestination('')
                  }} required disabled={!destinationProvince}>
                    <option value="">Select district</option>
                    {destinationDistricts.map((district) => <option key={district} value={district}>{district}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="destination">End Bus Stop</label>
                  <select id="destination" value={destination} onChange={(e) => setDestination(e.target.value)} required disabled={!destinationDistrict}>
                    <option value="">Select bus stop</option>
                    {destinationStops.map((stop) => <option key={stop} value={stop}>{stop}</option>)}
                  </select>
                </div>
              </div>
              <button type="submit" className="btn btn-primary">
                <Search size={20} />
                Search Routes
              </button>
            </form>

            {searched && (
              <div className="results-list">
                {results.length === 0 ? (
                  <>
                    <div className="result-card error-card">No exact route found in the current route-stage dataset.</div>
                    {suggestions.length > 0 && (
                      <div className="result-card ai-card">
                        <p className="result-eyebrow">Smart suggestions</p>
                        <h3>✨ Closest route matches</h3>
                        {suggestions.map(({ route }) => (
                          <p key={route.number}>Route {route.number}: {route.name} via {route.via.join(', ')}</p>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  results.map((route) => {
                    const fare = calculateFare(route.stageCount, 'normal')
                    return (
                      <div className="result-card route-result" key={route.number}>
                        <p className="result-eyebrow">Route {route.number}</p>
                        <h3>{route.name}</h3>
                        <p>{route.origin} to {route.destination} via {route.via.join(', ')}</p>
                        <div className="result-meta">
                          <span>{route.distanceKm} km</span>
                          <span>{route.stageCount} stages</span>
                          <span>{formatCurrency(fare.fare)} normal fare</span>
                        </div>
                      </div>
                    )
                  })
                )}
              </div>
            )}
          </div>

          <div className="info-grid">
            <div className="info-card">
              <h3>🇱🇰 Islandwide Districts</h3>
              <p>Select from all Sri Lankan districts with major town and bus-stand stops</p>
            </div>
            <div className="info-card">
              <h3>🧠 Smart Route Matching</h3>
              <p>Get direct matches and suggestions from the bundled route-stage dataset</p>
            </div>
            <div className="info-card">
              <h3>🔄 Real-Time Updates</h3>
              <p>Get the latest route information updated regularly</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FindRoutes
