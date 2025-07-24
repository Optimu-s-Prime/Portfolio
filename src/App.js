import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";

import Chat from "./chat";
import Heat from "./heat";
import Iot from "./iot";

import Virtusa from "./virtusa";
import ControlSystems from "./ControlSystems";

import bgImage from "./img.png";

export default function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
      }}
    >
      <Router>
        <div className="site-wrapper">
          <header className="navbar">
            <h1 className="logo">Portfolio</h1>
            <nav className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/experience">Experience</Link>
              <Link to="/contact">Contact</Link>
            </nav>
          </header>

          <section className="hero">
            <h1 className="hero-title animate-in animate-delay-1 hover-zoom">Kushal Yalamanchi</h1>
            <p className="hero-subtitle animate-in animate-delay-2 hover-zoom">A Computer Science Engineer.</p>
          </section>

          <main className="main-content">
            <Routes>
              {/* Main pages */}
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/contact" element={<Contact />} />

              {/* Project detail pages */}
              <Route path="/projects/chat" element={<Chat />} />
              <Route path="/projects/heat" element={<Heat />} />
              <Route path="/projects/iot" element={<Iot />} />

              {/* Experience detail pages */}
              <Route path="/experience/virtusa" element={<Virtusa />} />
              <Route path="/experience/control-systems" element={<ControlSystems />} />
            </Routes>
          </main>

          <footer className="footer">
            <p>&copy; 2025 Kushal Yalamanchi. All rights reserved.</p>
          </footer>
        </div>
      </Router>
    </div>
  );
}
