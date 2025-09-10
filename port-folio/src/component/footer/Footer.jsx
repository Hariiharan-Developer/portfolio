import React from 'react'

const Footer = () => {
  return (
    <footer 
      className="text-center py-4" 
      style={{ backgroundColor: "#111111", color: "#f8fafc" }}
    >
      <div className="container">
        <p>
          &copy; {new Date().getFullYear()} <span style={{ color: "#FFD700" }}>Hariharan</span>. All Rights Reserved.
        </p>

        <div className="social-links mt-2">
          <a href="https://github.com/Hariiharan-Developer" target="_blank" rel="noreferrer" className="mx-2 text-light">
            <i className="fab fa-github" style={{ color: "#FFD700", fontSize: "1.5rem" }}></i>
          </a>
          <a href="https://www.linkedin.com/in/hariharn-s/" target="_blank" rel="noreferrer" className="mx-2 text-light">
            <i className="fab fa-linkedin" style={{ color: "#FFD700", fontSize: "1.5rem" }}></i>
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="mx-2 text-light">
            <i className="fab fa-twitter" style={{ color: "#FFD700", fontSize: "1.5rem" }}></i>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
