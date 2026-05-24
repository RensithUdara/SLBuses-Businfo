import React, { useMemo, useState } from 'react'
import { Calculator, Table } from 'lucide-react'
import { calculateFare, fareRevision, formatCurrency, normalFareTable, serviceTypes } from '../data/busData'

const FareTable = () => {
  const [stage, setStage] = useState('1')
  const stageNumber = Math.min(Math.max(Number(stage) || 1, 1), normalFareTable.length)

  const comparison = useMemo(() => (
    Object.entries(serviceTypes).map(([key, service]) => ({
      key,
      label: service.label,
      fare: calculateFare(stageNumber, key),
    }))
  ), [stageNumber])

  const nearbyStages = useMemo(() => {
    const start = Math.max(1, stageNumber - 4)
    const end = Math.min(normalFareTable.length, stageNumber + 5)
    return Array.from({ length: end - start + 1 }, (_, index) => start + index)
  }, [stageNumber])

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="container">
          <h1><span className="emoji-mark">📊</span> Fare Table Lookup</h1>
          <p>Compare fare-stage prices across bus service types.</p>
        </div>
      </div>

      <section className="search-section">
        <div className="container">
          <div className="search-card">
            <h2><span className="emoji-mark">🎫</span> Stage Fare Comparison</h2>
            <div className="search-form">
              <div className="form-group">
                <label htmlFor="stage">
                  <Calculator size={20} />
                  Official Fare Stage
                </label>
                <input
                  id="stage"
                  type="number"
                  value={stage}
                  min="1"
                  max={normalFareTable.length}
                  onChange={(event) => setStage(event.target.value)}
                />
              </div>
            </div>

            <div className="result-card">
              <p className="result-eyebrow">Stage {stageNumber}</p>
              <h3>{formatCurrency(calculateFare(stageNumber, 'normal').fare)}</h3>
              <p>Normal bus fare for official fare stage {stageNumber}.</p>
              <div className="fare-comparison-grid">
                {comparison.map((item) => (
                  <div className="fare-chip" key={item.key}>
                    <span>{item.label}</span>
                    <strong>{formatCurrency(item.fare.fare)}</strong>
                  </div>
                ))}
              </div>
              <p className="result-note">
                Source: {fareRevision.sourceName}, effective {fareRevision.effectiveDate}.{' '}
                <a href={fareRevision.sourceUrl} target="_blank" rel="noreferrer">View NTC fare documents</a>
              </p>
            </div>
          </div>

          <div className="content-card">
            <h2><span className="emoji-mark">📋</span> Nearby Fare Stages</h2>
            <div className="fare-table">
              <div className="fare-table-row fare-table-head">
                <span>Stage</span>
                <span>Normal</span>
                <span>Semi-Luxury</span>
                <span>Luxury / AC</span>
                <span>Super Luxury</span>
              </div>
              {nearbyStages.map((itemStage) => (
                <div className="fare-table-row" key={itemStage}>
                  <span><Table size={16} /> {itemStage}</span>
                  <span>{formatCurrency(calculateFare(itemStage, 'normal').fare)}</span>
                  <span>{formatCurrency(calculateFare(itemStage, 'semi-luxury').fare)}</span>
                  <span>{formatCurrency(calculateFare(itemStage, 'luxury').fare)}</span>
                  <span>{formatCurrency(calculateFare(itemStage, 'super-luxury').fare)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FareTable
