import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Bus } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-content">
          <Link to="/" className="logo">
            <Bus size={32} />
            <span>SLBuses</span>
          </Link>

          <div className={`nav-links ${isOpen ? 'active' : ''}`}>
            <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
            <NavLink to="/normalfare" onClick={() => setIsOpen(false)}>Fares</NavLink>
            <NavLink to="/findroutes" onClick={() => setIsOpen(false)}>Routes</NavLink>
            <NavLink to="/normalwaytimes" onClick={() => setIsOpen(false)}>Timetables</NavLink>
            <NavLink to="/standnumbers" onClick={() => setIsOpen(false)}>Stands</NavLink>
            <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
            <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
          </div>

          <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle navigation" aria-expanded={isOpen}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
