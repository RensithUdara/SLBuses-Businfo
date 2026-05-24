import React, { useMemo, useState } from 'react'
import { DollarSign, MapPin, Calculator } from 'lucide-react'
import {
  calculateFare,
  calculateFareBetweenStops,
  fareRevision,
  formatCurrency,
  getDistricts,
  getProvinces,
  getStops,
  serviceTypes,
  suggestRoutes,
} from '../data/busData'

const NormalFare = () => {
  const [fromProvince, setFromProvince] = useState('')
  const [fromDistrict, setFromDistrict] = useState('')
  const [fromStop, setFromStop] = useState('')
  const [toProvince, setToProvince] = useState('')
  const [toDistrict, setToDistrict] = useState('')
  const [toStop, setToStop] = useState('')
  const [busType, setBusType] = useState('normal')
  const [manualStage, setManualStage] = useState('')
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')
  const [suggestions, setSuggestions] = useState([])

  const provinces = useMemo(() => getProvinces(), [])
  const fromDistricts = useMemo(() => getDistricts(fromProvince), [fromProvince])
  const toDistricts = useMemo(() => getDistricts(toProvince), [toProvince])
  const fromStops = useMemo(() => getStops(fromProvince, fromDistrict), [fromProvince, fromDistrict])
  const toStops = useMemo(() => getStops(toProvince, toDistrict), [toProvince, toDistrict])

  const updateFromProvince = (value) => {
    setFromProvince(value)
    setFromDistrict('')
    setFromStop('')
  }

  const updateFromDistrict = (value) => {
    setFromDistrict(value)
    setFromStop('')
  }

  const updateToProvince = (value) => {
    setToProvince(value)
    setToDistrict('')
    setToStop('')
  }

  const updateToDistrict = (value) => {
    setToDistrict(value)
    setToStop('')
  }

  const handleCalculate = (e) => {
    e.preventDefault()
    setError('')
    setSuggestions([])

    const matches = calculateFareBetweenStops(fromStop, toStop, busType)
    const match = matches[0]
    const stage = manualStage || match?.stage
    const fare = calculateFare(Number(stage), busType)

    if (!fare) {
      setResult(null)
      setSuggestions(suggestRoutes(fromStop, toStop))
      setError('I could not find an exact direct route between those two stops in the local dataset. Try one of the suggested routes, or enter an official fare stage manually.')
      return
    }

    setResult({ fare, match, from: fromStop, to: toStop, alternatives: matches.slice(1) })
  }

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="container">
          <h1><span className="emoji-mark">🎫</span> Normal Route Fare Calculator</h1>
          <p>Calculate official bus fares following government regulatory guidelines</p>
        </div>
      </div>

      <section className="search-section">
        <div className="container">
          <div className="search-card">
            <h2><span className="emoji-mark">💰</span> Calculate Fare</h2>
            <form onSubmit={handleCalculate} className="search-form">
              <div className="form-split">
                <div className="form-group">
                  <label htmlFor="fromProvince">
                    <MapPin size={20} />
                    Start Province
                  </label>
                  <select id="fromProvince" value={fromProvince} onChange={(e) => updateFromProvince(e.target.value)} required>
                    <option value="">Select province</option>
                    {provinces.map((province) => <option key={province} value={province}>{province}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="fromDistrict">Start District</label>
                  <select id="fromDistrict" value={fromDistrict} onChange={(e) => updateFromDistrict(e.target.value)} required disabled={!fromProvince}>
                    <option value="">Select district</option>
                    {fromDistricts.map((district) => <option key={district} value={district}>{district}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="fromStop">Start Bus Stop</label>
                  <select id="fromStop" value={fromStop} onChange={(e) => setFromStop(e.target.value)} required disabled={!fromDistrict}>
                    <option value="">Select bus stop</option>
                    {fromStops.map((stop) => <option key={stop} value={stop}>{stop}</option>)}
                  </select>
                </div>
              </div>
              <div className="form-split">
                <div className="form-group">
                  <label htmlFor="toProvince">
                    <MapPin size={20} />
                    End Province
                  </label>
                  <select id="toProvince" value={toProvince} onChange={(e) => updateToProvince(e.target.value)} required>
                    <option value="">Select province</option>
                    {provinces.map((province) => <option key={province} value={province}>{province}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="toDistrict">End District</label>
                  <select id="toDistrict" value={toDistrict} onChange={(e) => updateToDistrict(e.target.value)} required disabled={!toProvince}>
                    <option value="">Select district</option>
                    {toDistricts.map((district) => <option key={district} value={district}>{district}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="toStop">End Bus Stop</label>
                  <select id="toStop" value={toStop} onChange={(e) => setToStop(e.target.value)} required disabled={!toDistrict}>
                    <option value="">Select bus stop</option>
                    {toStops.map((stop) => <option key={stop} value={stop}>{stop}</option>)}
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="busType">
                  <DollarSign size={20} />
                  Bus Type
                </label>
                <select
                  id="busType"
                  value={busType}
                  onChange={(e) => setBusType(e.target.value)}
                >
                  {Object.entries(serviceTypes).map(([value, service]) => (
                    <option key={value} value={value}>{service.label}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="manualStage">
                  <Calculator size={20} />
                  Fare Stage
                </label>
                <input
                  type="number"
                  id="manualStage"
                  placeholder="Optional fallback: official fare stage 1-350"
                  value={manualStage}
                  onChange={(e) => setManualStage(e.target.value)}
                  min="1"
                  max="350"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                <Calculator size={20} />
                Calculate Fare
              </button>
            </form>

            {error && <div className="result-card error-card">{error}</div>}

            {suggestions.length > 0 && (
              <div className="result-card ai-card">
                <p className="result-eyebrow">Smart suggestions</p>
                <h3>🧭 Possible routes to check</h3>
                {suggestions.map(({ route }) => (
                  <p key={route.number}>Route {route.number}: {route.name} via {route.via.join(', ')}</p>
                ))}
              </div>
            )}

            {result && (
              <div className="result-card">
                <p className="result-eyebrow">AI-assisted fare result</p>
                <h3>{formatCurrency(result.fare.fare)}</h3>
                <p>
                  {result.fare.serviceLabel} fare from {result.from} to {result.to}, calculated from stage {result.fare.stage}.
                </p>
                {result.match && (
                  <p>
                    Matched Route {result.match.route.number}: {result.match.route.name}. Direction: {result.match.direction}.
                  </p>
                )}
                {!result.fare.isOfficialNormal && (
                  <p className="result-note">
                    Normal fare is {formatCurrency(result.fare.baseFare)}. Premium service fares are calculated from the same stage base with service-class multipliers.
                  </p>
                )}
                {result.alternatives.length > 0 && (
                  <p className="result-note">
                    Other matching route options found: {result.alternatives.map((item) => `Route ${item.route.number}`).join(', ')}.
                  </p>
                )}
                <p className="result-note">
                  Source: {fareRevision.sourceName}, effective {fareRevision.effectiveDate}.{' '}
                  <a href={fareRevision.sourceUrl} target="_blank" rel="noreferrer">View NTC fare documents</a>
                </p>
              </div>
            )}
          </div>

          <div className="info-grid">
            <div className="info-card">
              <h3>🏛️ Official Pricing</h3>
              <p>Fares calculated according to government transport authority tables</p>
            </div>
            <div className="info-card">
              <h3>📏 Distance-Based</h3>
              <p>Accurate pricing based on exact route distances</p>
            </div>
            <div className="info-card">
              <h3>🚌 Multiple Bus Types</h3>
              <p>Support for normal, semi-luxury, luxury, and AC buses</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NormalFare
