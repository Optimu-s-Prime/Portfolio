import React from "react";

export default function Iot() {
  return (
    <div className="project-detail">
      <h2>IOT Security System</h2>
      <p>
        The IoT-based Multi-Layer Security System is a comprehensive and intelligent solution that combines multiple access control methods with real-time health monitoring and intrusion detection. It supports RFID, fingerprint, facial recognition, and keypad entry, while also screening users for fever, heart rate, and oxygen levels. Sensors such as PIR, ultrasonic, IR, and reed switches detect unauthorized access, while gas sensors trigger emergency lockdowns in hazardous conditions. Multi-level alarms are activated based on threat levels, and unauthorized attempts result in intruder image capture and notification to the owner. The system supports OTP-based two-factor authentication and allows remote monitoring via Bluetooth or Wi-Fi. These features make it ideal for high-security environments like hospitals and restricted facilities, ensuring both physical security and health safety through automation and real-time alerts.
      </p>
      <h4>Tech Stack Used:</h4>
      <ul>
        <li><strong>Microcontrollers:</strong> Arduino Uno, NodeMCU (ESP8266)</li>
        <li><strong>Sensors:</strong> RFID, Fingerprint, PIR, IR, Ultrasonic, Gas, Temperature, Heart Rate, Oxygen</li>
        <li><strong>Camera Module:</strong> ESP32-CAM / Raspberry Pi Camera</li>
        <li><strong>Communication:</strong> Bluetooth, Wi-Fi</li>
        <li><strong>Software:</strong> Arduino IDE, Embedded C, Python (for image capture & notifications)</li>
      </ul>
    </div>
  );
}
