import React from "react";
import Footer from "./Footer";

function Aboutus(){
    return(
        <div className="main">
        <h1>About Us</h1>
        <p className="info">We are a passionate team of researchers and developers committed to using technology for healthcare advancement. Our mission is to harness the power of artificial intelligence to support early detection of skin cancer, which can significantly improve patient outcomes.
        This project focuses on building an intelligent system capable of classifying skin lesions from dermatoscopic images using state-of-the-art deep learning models.</p>
         
<div className="research-block">
        <h3>💡 Our Motivation</h3>
        <p>Skin cancer is among the most common types of cancer globally, yet early detection remains a challenge due to lack of awareness and accessibility. By leveraging machine learning, we aim to:
<li>Assist dermatologists in faster and more accurate diagnosis</li>
<li>Provide a cost-effective screening solution for remote and underserved areas</li>
<li>Raise awareness about the importance of early skin lesion analysis</li>

        </p>
      </div>

      <div className="research-block">
        <h3>🧪 Our Approach</h3>
        <p>We combined medical knowledge with technical innovation by:
<li>Using the HAM10000 dataset for real-world image diversity</li>
<li>Applying EfficientNet-B0, a powerful and efficient CNN model</li>
<li>Enhancing model accuracy through rigorous data preprocessing and augmentation</li>
<li>Building a user-friendly interface for seamless image upload and classification</li>

        </p>
      </div>

      <div className="research-block">
        <h3>🤝 Our Vision</h3>
        <p>We believe in an inclusive future where AI-driven diagnostics can support doctors and empower patients. This project is a step toward that vision — blending research, compassion, and code to fight skin cancer more effectively.

        </p>
      </div>

      </div>
     
     
      
    );
}
export default Aboutus;