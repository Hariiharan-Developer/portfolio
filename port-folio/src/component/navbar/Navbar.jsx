import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const location = useLocation() // detect active page

  return (
    <nav className="navbar navbar-expand-lg navbar-dark  sticky-top" style={{ background:'#0f172a', color: "#f8fafc" }}>
      <div className="container">
        {/* Brand */}
        <Link className="navbar-brand fw-bold text-warning" to="/">
         #codingIsFun
        </Link>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className={`nav-link  ${location.pathname === "/" ? "active-link" : ""}`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link  ${location.pathname === "/about" ? "active-link" : ""}`}
                to="/about"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link  ${location.pathname === "/service" ? "active-link" : ""}`}
                to="/service"
              >
                Service
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link  ${location.pathname === "/project" ? "active-link" : ""}`}
                to="/project"
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link  ${location.pathname === "/contact" ? "active-link" : ""}`}
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
