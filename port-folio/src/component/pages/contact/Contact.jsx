import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("✅ Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send message. Try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("⚠️ Server error.");
    }
  };

  return (
    <section className="py-5 text-light">
      <div className="container">
        <h2 className="fw-bold text-center mb-4" style={{ color: "#FFD700" }}>
          Contact Me
        </h2>
        <p className="text-secondary text-center mb-5">
          Have a project idea or want to work together? Fill out the form below.
        </p>

        <div className="row justify-content-center">
          <div className="col-md-8">
            <form
              className="p-4 border border-2 border-warning rounded shadow"
              onSubmit={handleSubmit} // 👈 connect handler
            >
              {/* Name */}
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-bold" style={{ color: "#FFD700" }}>
                  Your Name
                </label>
                <input
                  type="text"
                  className="form-control bg-dark text-light border border-warning"
                  id="name"
                  name="name"   // 👈 bind name
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                />
              </div>

              {/* Email */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-bold" style={{ color: "#FFD700" }}>
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control bg-dark text-light border border-warning"
                  id="email"
                  name="email"   // 👈 bind name
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
              </div>

              {/* Message */}
              <div className="mb-3">
                <label htmlFor="message" className="form-label fw-bold" style={{ color: "#FFD700" }}>
                  Message
                </label>
                <textarea
                  className="form-control bg-dark text-light border border-warning"
                  id="message"
                  name="message"   // 👈 bind name
                  value={form.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              {/* Submit */}
              <div className="text-center">
                <button type="submit" className="btn btn-warning fw-bold px-4">
                  Send Message
                </button>
              </div>

              {/* Status message */}
              {status && <p className="text-center mt-3">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
