import React from "react";

export default function ControlSystems() {
  return (
    <div className="experience-detail">
      <h2>Control System Engineer</h2>
      <p>
        I currently manage the development of a smart control system aimed at monitoring and regulating the drying
        rate of items within a polyhouse environment. The system dynamically responds to environmental factors like
        temperature, humidity, and airflow, along with material-specific drying requirements, to optimize both
        drying time and product shelf life. Using a modular architecture, each microcontroller handles a distinct
        function—data acquisition, decision-making, or actuation. My responsibilities include designing feedback
        loops, tuning control parameters, and ensuring smooth data communication across subsystems. This project
        is intended to improve energy efficiency and reduce manual oversight in smart agricultural setups.
      </p>
      <h4>Hardware Used:</h4>
      <ul>
        <li>Sony Spresense Board (Proprietary)</li>
        <li>ESP32</li>
        <li>Arduino Uno</li>
        <li>DaisySeed</li>
      </ul>
    </div>
  );
}
