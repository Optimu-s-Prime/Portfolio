import React from "react";

export default function Chat() {
  return (
    <div className="project-detail">
      <h2>Chat Application</h2>
      <p>
        The Chat Application is a secure, interactive, and real-time messaging platform built to support smooth user communication. It features multiple pages including Sign Up, Log In, Forgot Password, Home, Chat, Settings, and FAQ. Users can start individual or group chats, send and receive messages, delete conversations, manage contacts, and customize their interface with theme and background settings. The application also allows blocking or unblocking users and provides account recovery options through email, phone number, or personalized security questions. A clear and user-friendly interface ensures easy navigation, while sensitive user data is handled with strong privacy measures. Firebase services are used for user authentication, real-time database synchronization, cloud storage, and app hosting. These integrations allow the app to scale efficiently, maintain fast performance, and reduce backend complexity, making it ideal for modern web-based communication needs.
      </p>
      <h4>Tech Stack Used:</h4>
      <ul>
        <li><strong>Frontend:</strong> HTML, CSS, Bootstrap, JavaScript (ES6 Modules)</li>
        <li><strong>Authentication:</strong> Firebase Authentication</li>
        <li><strong>Database:</strong> Firebase Realtime Database</li>
        <li><strong>Hosting & Storage:</strong> Firebase Hosting (assumed)</li>
        <li><strong>Platform:</strong> Client-side Web App (no separate backend server)</li>
      </ul>
    </div>
  );
}
