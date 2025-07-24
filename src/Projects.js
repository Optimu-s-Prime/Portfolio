import React from "react";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <section className="section">
      <h2 className="section-title animate-in animate-delay-1 hover-zoom">Projects</h2>
      <div className="project-list">
        <div className="project-card animate-in animate-delay-2">
          <h3>
            <Link to="/projects/chat">Chat Application</Link>
          </h3>
          <p>Real-time chat app built with React and Firebase.</p>
        </div>

        <div className="project-card animate-in animate-delay-3">
          <h3>
            <Link to="/projects/heat">Heatmap-based Text Extractor</Link>
          </h3>
          <p>Generated motion heatmaps to isolate and extract moving text from videos.</p>
        </div>

        <div className="project-card animate-in animate-delay-4">
          <h3>
            <Link to="/projects/iot">IOT Security System</Link>
          </h3>
          <p>Advanced IoT-based multi-layer intelligent security system.</p>
        </div>
      </div>
    </section>
  );
}
