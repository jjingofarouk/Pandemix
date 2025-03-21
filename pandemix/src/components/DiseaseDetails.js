import React from 'react';

const DiseaseDetails = ({ disease }) => {
  if (!disease) {
    return <p>No disease selected.</p>;
  }

  return (
    <div className="disease-details">
      <h2>{disease.name}</h2>
      {disease.image && (
        <img src={disease.image} alt={`${disease.name} illustration`} />
      )}
      <p>{disease.description || 'No detailed description available.'}</p>
      <h3>Historical Impact</h3>
      <p>{disease.impact || 'No historical impact data available.'}</p>
    </div>
  );
};

export default DiseaseDetails;