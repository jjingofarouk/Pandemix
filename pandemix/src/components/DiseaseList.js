// /src/pages/HomePage.js
import React, { useContext, useState } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import DiseaseList from '../components/DiseaseList';
import DiseaseModal from '../components/DiseaseModal';
import { DiseaseContext } from '../context/DiseaseContext';
import useDiseaseData from '../hooks/useDiseaseData';
import { fetchDiseaseDetails } from '../api/diseaseApi';

const HomePage = () => {
  const { diseases, setDiseases } = useContext(DiseaseContext);
  const [searchQuery, setSearchQuery] = useState('');
  const { data, loading, error } = useDiseaseData(searchQuery);
  const [selectedDisease, setSelectedDisease] = useState(null);

  React.useEffect(() => {
    if (data) setDiseases(data);
  }, [data, setDiseases]);

  const handleCardClick = async (disease) => {
    const details = await fetchDiseaseDetails(disease.id);
    setSelectedDisease(details);
  };

  const closeModal = () => setSelectedDisease(null);

  return (
    <div className="home-page">
      <Header />
      <SearchBar onSearch={setSearchQuery} />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <DiseaseList diseases={diseases} onClick={handleCardClick} />
      {selectedDisease && <DiseaseModal disease={selectedDisease} onClose={closeModal} />}
    </div>
  );
};

export default HomePage;