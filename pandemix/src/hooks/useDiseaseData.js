// /src/hooks/useDiseaseData.js
import { useState, useEffect } from 'react';
import { fetchDiseaseData } from '../api/diseaseApi';

const useDiseaseData = (query) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;

    const getData = async () => {
      setLoading(true);
      try {
        const result = await fetchDiseaseData(query);
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [query]);

  return { data, loading, error };
};

export default useDiseaseData;