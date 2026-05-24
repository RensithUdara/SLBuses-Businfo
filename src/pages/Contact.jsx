import React, { useState } from 'react'
import { ExternalLink, Mail, MapPin, MessageSquare, Phone, Send } from 'lucide-react'
import { officialTransportAuthorities } from '../data/busData'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setSubmitted(false)
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="container">
          <h1><span className="emoji-mark">☎️</span> Contact and Official Authorities</h1>
          <p>Use SLBuses feedback for app data issues, and use official transport contacts for complaints or confirmations.</p>
        </div>
      </div>

      <section className="content-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-container">
              <h2><span className="emoji-mark">💬</span> Send SLBuses Feedback</h2>
              <p className="form-helper">
                This local form records no backend request yet. Use it as a frontend feedback flow, then connect it to email/API when deploying.
              </p>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Route correction, missing stop, fare issue..."
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us what should be improved in the app dataset."
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  <Send size={20} />
                  Send Feedback
                </button>
              </form>
              {submitted && (
                <div className="result-card ai-card">
                  <p className="result-eyebrow">Feedback captured</p>
                  <h3>✅ Thank you</h3>
                  <p>For production, connect this form to your email service, database, or support API.</p>
                </div>
              )}
            </div>

            <div className="contact-info">
              <h2><span className="emoji-mark">🏛️</span> Official Sri Lanka Transport Contacts</h2>
              <p>
                For formal complaints, route permits, government confirmations, and service matters, contact the relevant authority directly.
              </p>
              {officialTransportAuthorities.map((authority) => (
                <div className="authority-contact" key={authority.name}>
                  <h3>🚌 {authority.name}</h3>
                  <p>{authority.role}</p>
                  <div className="contact-item compact">
                    <div className="contact-icon">
                      <MapPin size={20} />
                    </div>
                    <div className="contact-details">
                      <p>{authority.address}</p>
                    </div>
                  </div>
                  <div className="contact-item compact">
                    <div className="contact-icon">
                      <Phone size={20} />
                    </div>
                    <div className="contact-details">
                      <p>{authority.phone}{authority.hotline ? ` | Hotline: ${authority.hotline}` : ''}</p>
                    </div>
                  </div>
                  <div className="contact-item compact">
                    <div className="contact-icon">
                      <Mail size={20} />
                    </div>
                    <div className="contact-details">
                      <p>{authority.email}</p>
                    </div>
                  </div>
                  <a className="authority-link" href={authority.website} target="_blank" rel="noreferrer">
                    Visit official website <ExternalLink size={16} />
                  </a>
                </div>
              ))}
              <div className="contact-item">
                <div className="contact-icon">
                  <MessageSquare size={24} />
                </div>
                <div className="contact-details">
                  <h3>🎫 Passenger Note</h3>
                  <p>Keep ticket details, route number, bus number, date, time, and location ready when making an official complaint.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
