import React from 'react';
import {  useNavigate } from 'react-router-dom';
import './LearnPage.css';
import { useLocation } from "react-router-dom";

const conditionInfo = {
  akiec: {
    name: "Actinic Keratoses (AKIEC)",
    description:
      "A precancerous skin lesion caused by long-term sun exposure. Often appears as rough, scaly patches on sun-exposed areas.",
    link: "https://dermnetnz.org/topics/actinic-keratosis"
  },
  bcc: {
    name: "Basal Cell Carcinoma (BCC)",
    description:
      "A slow-growing, non-melanoma skin cancer. It usually appears as a pearly bump or flat lesion on sun-exposed skin.",
    link: "https://dermnetnz.org/topics/basal-cell-carcinoma"
  },
  bkl: {
    name: "Benign Keratosis-like Lesions (BKL)",
    description:
      "Non-cancerous skin growths like seborrheic keratosis. Typically harmless but can look similar to melanomas.",
    link: "https://dermnetnz.org/topics/seborrhoeic-keratosis"
  },
  df: {
    name: "Dermatofibroma (DF)",
    description:
      "A common benign skin nodule that can appear after minor skin injury. Usually firm, raised, and dark-colored.",
    link: "https://dermnetnz.org/topics/dermatofibroma"
  },
  mel: {
    name: "Melanoma (MEL)",
    description:
      "A dangerous form of skin cancer that develops from pigment-producing cells. Early detection is critical.",
    link: "https://dermnetnz.org/topics/melanoma"
  },
  nv: {
    name: "Melanocytic Nevi (NV)",
    description:
      "Common moles that are generally harmless. Monitoring for changes in size, color, or shape is important.",
    link: "https://dermnetnz.org/topics/melanocytic-naevus"
  },
  vasc: {
    name: "Vascular Lesions (VASC)",
    description:
      "Includes angiomas, hemangiomas, and other blood-vessel related skin issues. Usually benign.",
    link: "https://dermnetnz.org/topics/vascular-tumours"
  }
};

function LearnPage() {
    const { state } = useLocation();
    const {  predictedLabel } = state;
  const navigate = useNavigate();
  const info = conditionInfo[predictedLabel];

  if (!info) {
    return (
      <div className="learn-container">
        <h2>Condition Not Found</h2>
        <p>We couldn't find any information on this condition.</p>
        <button onClick={() => navigate('/')}>Back to Home</button>
      </div>
    );
  }

  return (
    <div className="learn-container">
      <h2>{info.name}</h2>
      <p>{info.description}</p>
      <a href={info.link} target="_blank" rel="noreferrer" className="learn-link">
        Learn More on DermNet
      </a>
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
    </div>
  );
}

export default LearnPage;
