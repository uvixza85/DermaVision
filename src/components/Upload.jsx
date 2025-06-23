import React from "react";
import "./Upload.css"

 function Upload(){
    return(
        <div className="upload-section">
        <h1>upload Your Skin Image </h1>
        <div className = "uploadimg"> 
        
        <label className="upload-label">
        <input type='file' 
        accept="image/*"
          hidden/>
          <img src="/images/uploaderm.png"  className="imagelogo1"/>
          </label>
          </div>
          <button className="upload-btn" >
          Submit for Prediction
        </button>
          <p> </p>
          </div>
    );
 }
 export default Upload;