import React from 'react';
import './Report.css';
import { useLocation } from 'react-router-dom';
import html2pdf from 'html2pdf.js';

function Report() {
  const { state } = useLocation();
  const {
    userData = {},
    predictedLabel,
    confidence,
    imageurl
  } = state || {};
console.log(userData)
  const today = new Date().toLocaleDateString();

  const downloadPDF = () => {
    const element = document.getElementById('report-content');
    html2pdf()
      .set({
        margin: 0.5,
        filename: `${userData.name || 'skin'}-diagnosis-report.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
      })
      .from(element)
      .save();
  };

  return (
    <div className="styled-report">
      <div className="report-actions">
      </div>

      <div id="report-content" className="report-box">
        <header className="report-header">
          <h1>DermaVision Diagnostic Center</h1>
          <h2>MEDICAL REPORT</h2>
        </header>

        <section className="section">
          <h3 className="section-title blue">Visit Info</h3>
          <div className="grid">
            <p><strong>Doctor’s Name:</strong> AI Diagnostic Bot</p>
            <p><strong>Visit Date:</strong> {today}</p>
            <p><strong>Model Version:</strong> v1.0 (TF.js)</p>
          </div>
        </section>

        <section className="section">
          <h3 className="section-title blue">Patient Info</h3>
          <div className="grid">
            <p><strong>Full Name:</strong> {userData.name}</p>
            <p><strong>Birth Date:</strong> {userData.dob || 'N/A'}</p>
            <p><strong>Gender:</strong> {userData.gender}</p>
            <p><strong>Phone:</strong> {userData.phone || 'N/A'}</p>
          </div>
        </section>

        <section className="section">
          <h3 className="section-title green">Assessment</h3>
          <p>
            Based on the uploaded image and model inference, the skin lesion
            shows features consistent with <strong>{predictedLabel.toUpperCase()}</strong>.
            Confidence score: <strong>{confidence}%</strong>.
          </p>
        </section>

        

        <section className="section">
          <h3 className="section-title green">Diagnosis</h3>
          <p>
            This preliminary AI diagnosis suggests the condition may be consistent with{' '}
            <strong>{predictedLabel.toUpperCase()}</strong>. This is not a final diagnosis.
            We strongly recommend a clinical consultation with a licensed dermatologist.
          </p>
        </section>

        <section className="section">
          <h3 className="section-title green">Prescription</h3>
          <p>
            No prescription is provided by this system. Please consult your physician
            for a clinical examination and treatment plan.
          </p>
        </section>

        <section className="image-box">
          <img src={imageurl} alt="Uploaded lesion" />
        </section>

      </div>
      <div className="styled-report">
  <button className="floating-download-btn" onClick={downloadPDF}>
    📄 Download Report
  </button>
</div>
    </div>
    
  );
}

export default Report;
