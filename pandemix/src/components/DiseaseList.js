import React from 'react';
import DiseaseCard from './DiseaseCard';
import '../styles/DiseaseList.css';

const DiseaseList = ({ diseases }) => {
  return (
    <div className="disease-list">
      {diseases.length > 0 ? (
        diseases.map((disease) => (
          <DiseaseCard key={disease.id} disease={disease} />
        ))
      ) : (
        <p>No diseases found.</p>
      )}
    </div>
  );
};

export default DiseaseList;