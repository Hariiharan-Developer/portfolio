import React from "react";
import project1 from "../../../assets/swiggy-logo-hd.png";
import project2 from "../../../assets/logo.png";
import project3 from "../../../assets/task.png";

const Project = () => {
  return (
    <section className="py-5 text-light">
      <div className="container text-center">
        {/* Heading */}
        <h2 className="fw-bold mb-4" style={{ color: "#FFD700" }}>
          My Projects
        </h2>
        <p className="text-secondary mb-5">
          Here are some of my recent works using the{" "}
          <span style={{ color: "#FFD700" }}>MERN Stack</span>.
        </p>

        

        <div className="row g-4">
          {/* Project 1 */}
          <div className="col-md-4">
            <div className="card h-100  border border-2 border-warning shadow text-light" style={{background:'#111111',padding:'0 10px'}}>
              <img
                src={project1}
                className="card-img-top "
                alt="Project 1"
                style={{ maxHeight: "180px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="fw-bold" style={{ color: "#FFD700" }}>
                  Swiggy Clone
                </h5>
                <p className="text-secondary small">
                  Full-stack food ordering app built with React, Node, Express,
                  MongoDB, and Stripe integration.
                </p>
                <div className="d-flex justify-content-center gap-2">
                  <a
                    href="https://food-online-order-frontend.onrender.com"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-warning btn-sm fw-bold"
                  >
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/Hariiharan-Developer/Food-Online-Order"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-warning btn-sm fw-bold"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="col-md-4">
            <div className="card h-100 border border-2 border-warning shadow text-light" style={{background:'#111111'}}>
              <img
                src={project2}
                className="card-img-top mt-5"
                alt="Project 2"
                style={{ maxHeight: "180px", objectFit: "cover", padding:'0 10px'}}
              />
              <div className="card-body mt-5">
                <h5 className="fw-bold" style={{ color: "#FFD700" }}>
                  Netflix Clone
                </h5>
                <p className="text-secondary small">
                  Frontend React app with API integration, focusing on UI/UX and
                  real-world React usage.
                </p>
                <div className="d-flex justify-content-center gap-2">
                  <a
                    href="https://netfilx-clone-we5a.onrender.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-warning btn-sm fw-bold"
                  >
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/Hariiharan-Developer/Netfilx-clone"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-warning btn-sm fw-bold"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="col-md-4">
            <div className="card h-100 border border-2 border-warning shadow text-light" style={{background:'#111111'}}>
              <img
                src={project3}
                className="card-img-top"
                alt="Project 3"
                style={{ maxHeight: "180px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="fw-bold" style={{ color: "#FFD700" }}>
                  Task Manager App
                </h5>
                <p className="text-secondary small">
                  MERN app for task management with authentication (JWT +
                  bcrypt) and CRUD operations.
                </p>
                <div className="d-flex justify-content-center gap-2">
                  <a
                    href="https://task-manager-demo.vercel.app"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-warning btn-sm fw-bold"
                  >
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/yourgithub/task-manager"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-warning btn-sm fw-bold"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Extra CTA */}
        <div className="mt-5">
          <a
            href="https://github.com/Hariiharan-Developer"
            target="_blank"
            rel="noreferrer"
            className="btn btn-warning fw-bold"
          >
            See More Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Project;
