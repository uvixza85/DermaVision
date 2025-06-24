import React from "react";
import "./Result.css"
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function Result(){
  const { state } = useLocation();
  const { imageurl } = state;
  const navigate = useNavigate();
    return(
        <div className="result-card-with-image">
        <div className="result-card">
        <h2>Prediction Result</h2>
        <p className="prediction-text">Condition Detected:</p>
        <p className="prediction-value">x</p>

        <p className="confidence-text">Confidence:</p>
        <p className="confidence-value">y</p>

        <div className="result-actions">
          <button className="download-btn">Download Report</button>
          <button className="back-btn" onClick={() => navigate('/upload')}>Upload another</button>
        </div>
      </div>
      <div className="result-image-box">
            <img src={imageurl} alt="Result Preview" className="result-image" />
          </div>

      </div>
    
    
    );
}
export default Result