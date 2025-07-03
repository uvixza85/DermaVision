import React, { useEffect, useState } from "react";
import "./History.css";

function History() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await fetch("http://localhost:5000/reports");
        const data = await response.json();
        setReports(data);
      } catch (error) {
        console.error("Error fetching reports:", error);
      }
    };

    fetchReports();
  }, []);

  return (
    <div className="history-container">
      <h2>Patient Report History</h2>
      {reports.length === 0 ? (
        <p>No reports available.</p>
      ) : (
        <table className="history-table">
          <thead>
            <tr>
              <th>Name</th>
              
              <th>Gender</th>
              <th>Diagnosis</th>
              <th>Confidence</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report, index) => (
              <tr key={index}>
                <td>{report.name}</td>
                
                <td>{report.gender}</td>
                <td>{report.diagnosis}</td>
                <td>{report.confidence}%</td>
                <td>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default History;
