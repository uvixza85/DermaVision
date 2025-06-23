import React from "react";
import "./Research.css";
import Footer from "./Footer";

function Research(){
    return(
      
        <div className="main">
        <h1>🔬 Research</h1>
        <p className="info">Our skin cancer classification model is built using a Convolutional Neural Network (CNN), specifically the EfficientNet-B0 architecture, known for achieving high accuracy with fewer parameters.
We trained this model on the HAM10000 dataset (Human Against Machine with 10,000 training images), which contains dermatoscopic images of seven common pigmented skin lesion types, including melanoma, basal cell carcinoma, and benign keratosis-like lesions</p>
         
<div className="research-block">
        <h3>🧠 Why EfficientNet-B0?</h3>
        <p>
            
        <li>Balances accuracy and computational efficiency</li>
        <li>Utilizes compound scaling to optimally scale depth, width, and resolution</li>
        <li>Is pre-trained on ImageNet, providing strong feature extraction capabilities</li>

        </p>
      </div>

      <div className="research-block">
        <h3>📁 Dataset: HAM10000</h3>
        <p>
       <li>10,015 dermatoscopic images</li> 
       <li>7 skin lesion classes</li>
       <li>Images are high-resolution and dermatoscopically verified
Balanced using augmentation techniques</li>
 </p>
      </div>
      <div className="research-block">
        <h3>📈 Performance</h3>
        <p>
       <li>Training Accuracy: 92.4%</li> 
       <li>Validation Accuracy: 87.1%</li>
       <li>Loss Function: Categorical Crossentropy</li>
       <li>Optimizer: Adam</li>
       <li>Augmentations: Rotation, flipping, zoom, brightness shift</li>

 </p>
      </div>
         
         
         </div>
         
    );
}

export default Research