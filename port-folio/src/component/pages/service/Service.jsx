import React from "react";
import reactLogo from "../../../assets/react.png";
import nodeLogo from "../../../assets/node.js.png";
import expressLogo from "../../../assets/express.png";
import mongoLogo from "../../../assets/mongodb.png";

const Service = () => {
  return (
    <section className="py-5  text-light" style={{background:'#1e293b'}}>
      <div className="container text-center">
        {/* Heading */}
        <h2 className="fw-bold mb-4" style={{ color: "#FFD700" }}>
          My Services
        </h2>
        <p className="mb-5 text-secondary">
          I specialize in building powerful web applications using the MERN stack.
        </p>

        <div className="row g-4">
          {/* React - Frontend */}
          <div className="col-md-3 col-6">
            <div className="card h-100 border border-2 border-warning text-light shadow" style={{background:'#111111'}}>
              <div className="card-body">
                <img src={reactLogo} alt="React" width="100" className="mb-3" />
                <h5 className="fw-bold" style={{ color: "#FFD700" }}>
                  React.js
                </h5>
                <p className="text-secondary small">
                  Responsive and interactive frontend with React.
                </p>
              </div>
            </div>
          </div>

          {/* Node.js - Backend */}
          <div className="col-md-3 col-6">
            <div className="card h-100 border border-2 border-warning text-light shadow" style={{background:'#111111'}}>
              <div className="card-body">
                <img src={nodeLogo} alt="Node.js" width="100" className="mb-3" />
                <h5 className="fw-bold" style={{ color: "#FFD700" }}>
                  Node.js
                </h5>
                <p className="text-secondary small">
                  Scalable backend with Node.js runtime.
                </p>
              </div>
            </div>
          </div>

          {/* Express.js */}
          <div className="col-md-3 col-6">
            <div className="card h-100 border border-2 border-warning text-light shadow" style={{background:'#111111',padding:'30px'}}>
              <div className="card-body">
                <img src={expressLogo} alt="Express.js" width="100" className="mb-3" />
                <h5 className="fw-bold" style={{ color: "#FFD700" }}>
                  Express.js
                </h5>
                <p className="text-secondary small">
                  Lightweight and fast server-side framework.
                </p>
              </div>
            </div>
          </div>

          {/* MongoDB */}
          <div className="col-md-3 col-6">
            <div className="card h-100 border border-2 border-warning text-light shadow" style={{background:'#111111'}}>
              <div className="card-body">
                <img src={mongoLogo} alt="MongoDB" width="100" className="mb-3" />
                <h5 className="fw-bold" style={{ color: "#FFD700" }}>
                  MongoDB
                </h5>
                <p className="text-secondary small">
                  Flexible NoSQL database for modern apps.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Full MERN Card */}
        <div className="row g-4 mt-4">
          <div className="col-md-12">
            <div className="card h-100 border border-2 border-warning text-light shadow" style={{background:'#111111'}}>
              <div className="card-body">
                <h4 className="fw-bold mb-3" style={{ color: "#FFD700" }}>
                  Full Stack MERN Development
                </h4>
                <p className="text-secondary">
                  From frontend (React) to backend (Node & Express) and database (MongoDB), I build complete, modern, and secure web applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
