import React from 'react'

const About = () => {
  return (
    <section 
      className="d-flex flex-column justify-content-center align-items-center text-center py-5 mt-5 mb-5"
      style={{ backgroundColor: "#1e293b", color: "#f8fafc" }}
    >
      <div className="container">
        <h1 className="display-4 fw-bold mb-4" style={{ color: "#FFD700" }}>
          About Me
        </h1>

        <p className="lead mb-3">
          Hi! I’m <span style={{ color: "#FFD700" }}>Hariharan</span>, a passionate Full Stack Developer specializing in MERN stack applications.
        </p>

        <p className="mb-3">
          I love transforming ideas into interactive, user-friendly web applications.  
          I enjoy solving real-world problems with code and continuously learning new technologies.
        </p>

        <p>
          My skills include <span style={{ color: "#FFD700" }}>JavaScript, React.js, Node.js, Express.js, MongoDB</span>, 
          and more. When I’m not coding, I enjoy designing UI/UX interfaces and exploring tech innovations.
        </p>
     
     
      </div>
    </section>
  )
}

export default About
