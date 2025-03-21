import React, { useContext } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import DiseaseList from '../components/DiseaseList';
import { DiseaseContext } from '../context/DiseaseContext';
import useDiseaseData from '../hooks/useDiseaseData';

const HomePage = () => {
  const { diseases, setDiseases } = useContext(DiseaseContext);
  const [searchQuery, setSearchQuery] = React.useState('');
  const { data, loading, error } = useDiseaseData(searchQuery);

  React.useEffect(() => {
    if (data) setDiseases(data);
  }, [data, setDiseases]);

  return (
    <div className="home-page">
      <Header />
      <SearchBar onSearch={setSearchQuery} />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <DiseaseList diseases={diseases} />
    </div>
  );
};

export default HomePage;