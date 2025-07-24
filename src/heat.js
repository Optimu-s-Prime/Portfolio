import React from "react";

export default function Heat() {
  return (
    <div className="project-detail">
      <h2>Heatmap-based Text Extractor</h2>
      <p>
        This project focuses on video encoding techniques for text-embedded videos, addressing challenges like dynamic text changes, varying fonts, and region accuracy. A hybrid approach is proposed using CRAFT (Character Region Awareness for Text Detection) integrated with saliency map generation to emphasize text regions during encoding. This method optimizes processing time, memory usage, and accuracy. Evaluations were performed on Windows 11 with AMD Ryzen 7 CPU and 16GB RAM, comparing CRAFT variants against baseline models. Metrics such as CPU/memory usage, processing time, and regional accuracy were assessed. CRAFT-Link showed better linking performance, while CRAFT delivered more precise region detection. Experimental results in Google Colab highlighted differences in preprocessing, linking, and postprocessing durations. The system demonstrated efficient resource utilization and scalability for both image and video data, making it suitable for real-time and resource-constrained applications.
      </p>
      <h4>Tech Stack Used:</h4>
      <ul>
        <li><strong>Text Detection:</strong> CRAFT, CRAFT-Link</li>
        <li><strong>Saliency Mapping:</strong> Saliency Models (OpenCV, PyTorch)</li>
        <li><strong>Programming Language:</strong> Python</li>
        <li><strong>Environment:</strong> Google Colab</li>
        <li><strong>Operating System:</strong> Windows 11</li>
        <li><strong>Hardware:</strong> AMD Ryzen 7, 16GB RAM</li>
        <li><strong>Visualization & Analysis:</strong> Matplotlib, NumPy</li>
      </ul>
    </div>
  );
}
