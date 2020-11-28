export const createWikipediaUrl = (value) => `https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=${value}`;

export const fetchSearchResults = (value) => fetch(
  createWikipediaUrl(value),
).then((res) => res.json());
