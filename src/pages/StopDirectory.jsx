import React, { useMemo, useState } from 'react'
import { MapPin, Search } from 'lucide-react'
import { getDistricts, getProvinces, getStops, locationCatalog, routes } from '../data/busData'

const StopDirectory = () => {
  const [province, setProvince] = useState('')
  const [district, setDistrict] = useState('')
  const [query, setQuery] = useState('')

  const provinces = useMemo(() => getProvinces(), [])
  const districts = useMemo(() => getDistricts(province), [province])
  const stops = useMemo(() => {
    const selectedStops = getStops(province, district)
    const search = query.trim().toLowerCase()
    return selectedStops.filter((stop) => !search || stop.toLowerCase().includes(search))
  }, [province, district, query])

  const routeStopNames = useMemo(() => (
    new Set(routes.flatMap((route) => route.stops.map((stop) => stop.name)))
  ), [])

  const totalDistricts = useMemo(() => new Set(locationCatalog.map((item) => item.district)).size, [])

  const updateProvince = (value) => {
    setProvince(value)
    setDistrict('')
    setQuery('')
  }

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="container">
          <h1><span className="emoji-mark">🚏</span> Stop Directory</h1>
          <p>Browse major Sri Lankan town and bus-stand stops by province and district.</p>
        </div>
      </div>

      <section className="search-section">
        <div className="container">
          <div className="search-card">
            <h2><span className="emoji-mark">🔎</span> Browse Stops</h2>
            <div className="search-form">
              <div className="form-split">
                <div className="form-group">
                  <label htmlFor="province">
                    <MapPin size={20} />
                    Province
                  </label>
                  <select id="province" value={province} onChange={(event) => updateProvince(event.target.value)}>
                    <option value="">All provinces</option>
                    {provinces.map((item) => <option key={item} value={item}>{item}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="district">District</label>
                  <select id="district" value={district} onChange={(event) => setDistrict(event.target.value)} disabled={!province}>
                    <option value="">All districts</option>
                    {districts.map((item) => <option key={item} value={item}>{item}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="query">
                    <Search size={20} />
                    Search Stop
                  </label>
                  <input
                    id="query"
                    type="search"
                    placeholder="Type stop name"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="info-grid">
            <div className="info-card">
              <h3>🇱🇰 {provinces.length} Provinces</h3>
              <p>Province-level filtering for easier browsing</p>
            </div>
            <div className="info-card">
              <h3>📍 {totalDistricts} Districts</h3>
              <p>All Sri Lankan districts included</p>
            </div>
            <div className="info-card">
              <h3>🚏 {locationCatalog.length}+ Stops</h3>
              <p>Major towns and bus stand locations</p>
            </div>
          </div>

          <div className="content-card">
            <h2><span className="emoji-mark">📌</span> Stops Found ({stops.length})</h2>
            {stops.length === 0 ? (
              <div className="result-card error-card">No stops found for this filter.</div>
            ) : (
              <div className="stop-grid">
                {stops.map((stop) => {
                  const meta = locationCatalog.find((item) => item.name === stop)
                  const hasRouteData = routeStopNames.has(stop)
                  return (
                    <div className="stop-card" key={`${meta?.district}-${stop}`}>
                      <h3>🚏 {stop}</h3>
                      <p>{meta?.district}, {meta?.province}</p>
                      <span className={hasRouteData ? 'status-pill ready' : 'status-pill'}>
                        {hasRouteData ? 'Route-stage data' : 'Directory stop'}
                      </span>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default StopDirectory
