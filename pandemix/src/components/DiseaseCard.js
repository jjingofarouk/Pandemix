// /src/components/DiseaseCard.js
import React from 'react';
import '../styles/DiseaseCard.css';

const DiseaseCard = ({ disease, onClick }) => {
  return (
    <div className="disease-card" onClick={() => onClick(disease)}>
      <h3>{disease.name}</h3>
      <p>{disease.summary}</p>
      <span className="learn-more">Click to learn more</span>
    </div>
  );
};

export default DiseaseCard;