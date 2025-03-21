// /src/components/DiseaseModal.js
import React from 'react';

const DiseaseModal = ({ disease, onClose }) => {
  if (!disease) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{disease.name}</h2>
        <p>{disease.description || 'No detailed description available.'}</p>
        <h3>Historical Impact</h3>
        <p>{disease.impact || 'No historical impact data available.'}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default DiseaseModal;