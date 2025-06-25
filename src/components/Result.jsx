import React from "react";
import "./Result.css"
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function Result(){
  const { state } = useLocation();
  const { imageurl, predictedLabel ,confidence } = state;
  const navigate = useNavigate();
    return(
        <div className="result-card-with-image">
        <div className="result-card">
        <h2>Prediction Result</h2>
        <p className="prediction-text">Condition Detected:</p>
        <p className="prediction-value">{predictedLabel}</p>

        <p className="confidence-text">Confidence:</p>
        <p className="confidence-value">{confidence}</p>

        <div className="result-actions">
          <button className="download-btn" onClick={() => navigate("/learn", {
    state: {
      predictedLabel
    }
  })}>Learn about your condition</button>
          <button className="download-btn"    style={{   backgroundColor: "#FFDDD2", color: "#222831"
  }} onClick={() => navigate('/upload')}>Upload another</button>
        </div>
      </div>
      <div className="result-image-box">
            <img src={imageurl} alt="Result Preview" className="result-image" />
          </div>

      </div>
    
    
    );
}
export default Result