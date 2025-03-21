import React from 'react';
import '../styles/DiseaseCard.css';

const DiseaseCard = ({ disease }) => {
  return (
    <div className="disease-card">
      {disease.image && (
        <img src={disease.image} alt={`${disease.name} illustration`} />
      )}
      <h3>{disease.name}</h3>
      <p>{disease.summary || 'No summary available'}</p>
      <a href={`/disease/${disease.id}`}>Learn More</a>
    </div>
  );
};

export default DiseaseCard;