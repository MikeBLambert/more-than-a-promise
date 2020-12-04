export const createWikipediaUrl = (value) => `https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=${value}`;

export const fetchSuggestions = (value) => fetch(
  createWikipediaUrl(value),
).then((res) => res.json());
