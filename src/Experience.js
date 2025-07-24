import React from "react";
import { Link } from "react-router-dom";

export default function Experience() {
  return (
    <section className="section">
      <h2 className="section-title">Experience</h2>
      <div className="experience-list">
        <div className="experience-card">
          <h3>
            <Link to="/experience/virtusa">Database Migration Intern</Link>
          </h3>
          <p>Company Virtusa — June 16th 2025 : July 16th 2025</p>
        </div>
        <div className="experience-card">
          <h3>
            <Link to="/experience/control-systems">Control System Engineer</Link>
          </h3>
          <p>Control system design for agro monitoring</p>
        </div>
      </div>
    </section>
  );
}
