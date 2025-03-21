export const fetchDiseaseData = async (query) => {
  const response = await fetch(
    `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${query}&format=json&origin=*`
  );
  const data = await response.json();
  return data.query.search.map((item) => ({
    id: item.pageid,
    name: item.title,
    summary: item.snippet,
  }));
};