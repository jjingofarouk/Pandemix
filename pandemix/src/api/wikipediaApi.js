// /src/api/diseaseApi.js
export const fetchDiseaseData = async (query = 'disease') => {
  try {
    const response = await fetch(
      `https://www.wikidata.org/w/api.php?action=wbsearchentities&search=${query}&format=json&language=en&type=item&limit=50&origin=*`
    );
    const data = await response.json();

    return data.search.map((item) => ({
      id: item.id, // Wikidata QID, e.g., Q1656682 for Ebola
      name: item.label || item.title,
      summary: item.description || 'No summary available',
    }));
  } catch (error) {
    console.error('Error fetching disease data:', error);
    return [];
  }
};

export const fetchDiseaseDetails = async (id) => {
  try {
    const response = await fetch(
      `https://www.wikidata.org/w/api.php?action=wbgetentities&ids=${id}&format=json&language=en&origin=*`
    );
    const data = await response.json();
    const entity = data.entities[id];

    return {
      id,
      name: entity.labels?.en?.value || 'Unknown Disease',
      description: entity.descriptions?.en?.value || 'No description available',
      impact: entity.claims?.P577 // Publication date as a proxy for outbreak (if available)
        ? `First noted: ${entity.claims.P577[0].mainsnak.datavalue.value.time}`
        : 'No historical impact data available',
    };
  } catch (error) {
    console.error('Error fetching disease details:', error);
    return null;
  }
};