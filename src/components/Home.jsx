import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom"

function Home(){
  const navigate = useNavigate();
    return(
        <div className="container">
        < section className="hero">
        <h2>AI-Powered Skin Cancer Detection Early diagnosis. Smarter treatment. Better outcomes</h2>
        <p>
        Our deep learning model classifies skin lesions from dermatoscopic images with high accuracy. Backed by research, driven by impact.
        </p>
        <button onClick={() => navigate('/upload')}>Detect</button>
        <button onClick={() => navigate('/Research')}>Research</button>
      </section>

     
      </div>
    );
}
export default Home;