import React, { useState } from 'react';
import "./Upload.css";
import { useNavigate } from 'react-router-dom';

 function Upload(){
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  async function fileview(event){
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  }
    
  function handlesubmit(){
    navigate("/result", { replace: true, state: { imageurl:selectedImage  } })
  }


    return(
        <div className="upload-section">
        <h1>upload Your Skin Image </h1>
        <div className = "uploadimg"> 
        
        <label className="upload-label">
        <input type='file' 
        accept="image/*"
        onChange= {fileview}
          hidden/>
         {selectedImage ? (
  <div className="preview-box">
    <img src={selectedImage} alt="Preview" className="preview-image" />
  </div>
) : (
  <div className="preview-box">
    <img src="/images/uploaderm.png" alt="Default Upload" className="imagelogo1" />
  </div>
)} 
          </label>
          </div>
         {selectedImage && (<div><button className="upload-btn"  onClick={() => {
  setSelectedImage(null);
  navigate('/upload');
}} >
          upload another 
        </button>
         <button className="upload-btn" onClick={handlesubmit}>
         Submit for Prediction  
       </button></div> )}
          
          <p> </p>
          </div>
    );
 }
 export default Upload;