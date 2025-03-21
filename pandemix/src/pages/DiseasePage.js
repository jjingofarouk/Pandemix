import React, { useContext } from 'react';
import Header from '../components/Header';
import DiseaseDetails from '../components/DiseaseDetails';
import { DiseaseContext } from '../context/DiseaseContext';

const DiseasePage = () => {
  const { selectedDisease } = useContext(DiseaseContext);

  return (
    <div className="disease-page">
      <Header />
      <DiseaseDetails disease={selectedDisease} />
    </div>
  );
};

export default DiseasePage;