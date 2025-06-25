import React, { useState } from 'react';
import "./Upload.css";
import { useNavigate } from 'react-router-dom';
import * as tf from '@tensorflow/tfjs';

 function Upload(){
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const navigate = useNavigate();

  async function fileview(event){
    const file = event.target.files[0];
    setImageFile(file);
    setSelectedImage(URL.createObjectURL(file));
  }
    
  function handlesubmit(){
    navigate("/result", { replace: true, state: { imageurl:selectedImage  } })
  }
  async function predictImage() {
    // 1. Load model
    const model = await tf.loadLayersModel('/images/model/tfjs_model/model.json');
    const imageBitmap = await createImageBitmap(imageFile);

  let tensor = tf.browser.fromPixels(imageBitmap)
    .resizeNearestNeighbor([28, 28])
    .toFloat();

  // Standardization (replace with your actual values)
  const TRAINING_MEAN = 127.5;
  const TRAINING_STD = 50.0;
  tensor = tensor.sub(TRAINING_MEAN).div(TRAINING_STD);

  const batched = tensor.expandDims(0);

  const prediction = model.predict(batched);
  const data = await prediction.data();
  const maxIndex = data.indexOf(Math.max(...data));

  const classLabels = ["akiec", "bcc", "bkl", "df", "mel", "nv", "vasc"];
  const predictedLabel = classLabels[maxIndex];
  const confidence = (data[maxIndex] * 100).toFixed(2);
  navigate("/result", {
    replace: true,
    state: {
      imageurl: selectedImage ,
      predictedLabel,
      confidence
    }
  });
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
         <button className="upload-btn" onClick={predictImage}>
         Submit for Prediction  
       </button></div> )}
          
          <p> </p>
          </div>
    );
 }
 export default Upload;