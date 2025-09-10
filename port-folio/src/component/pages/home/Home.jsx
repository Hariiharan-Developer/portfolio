import React from 'react'
import { ReactTyped } from "react-typed";
import './Home.css'



const Home = () => {
  return (
    <div className="home-container text-center d-flex flex-column justify-content-center align-items-center" style={{height: "90vh"}}>
      <h1 className="display-4 fw-bold">Hi, I'm <span className="text-warning">Hariharan</span></h1>
      
      {/* Animated Text */}
      <h2 className="lead mt-3 fw-normal">
        <ReactTyped
          strings={[
            "Full Stack Developer...",
            "MERN Enthusiast...",
            "JavaScript Lover...",
            "React.js Explorer...",
            "Node.js Backend Builder..."
          ]}
          typeSpeed={60}     // typing speed
          backSpeed={40}     // backspacing speed
          loop               // keeps repeating
        />
      </h2>

      <p className="mt-4 w-75">
        I build modern web applications with clean design and efficient code.  
        Passionate about JavaScript, React, Node.js, and MongoDB.  
        Turning ideas into reality through code.
      </p>

      <div className="mt-4">
        <a href="/project" className="btn btn-outline-warning me-3">See My Projects</a>
        <a href="/contact" className="btn btn-outline-warning">Hire Me</a>
      </div>
    </div>
  )
}

export default Home
