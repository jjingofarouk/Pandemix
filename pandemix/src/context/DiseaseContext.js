import React, { createContext, useState } from 'react';

export const DiseaseContext = createContext();

export const DiseaseProvider = ({ children }) => {
  const [diseases, setDiseases] = useState([]);
  const [selectedDisease, setSelectedDisease] = useState(null);

  return (
    <DiseaseContext.Provider value={{ diseases, setDiseases, selectedDisease, setSelectedDisease }}>
      {children}
    </DiseaseContext.Provider>
  );
};