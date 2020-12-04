import React, { useEffect, useState } from 'react';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import './App.css';
import { fetchSuggestions } from '../api/wikipedia';
import SearchField from './SearchField';
import Suggestions from './Suggestions';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const doSearch = async (searchQuery) => {
    try {
      const response = await fetchSuggestions(searchQuery);
      if (response && response[1]) setSuggestions(response[1]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    doSearch(query);
  }, [query]);

  const handleChange = ({ target: { value } }) => setQuery(value);

  return (
    <div>

      <SearchField value={query} onChange={handleChange} />
      <Suggestions
        isLoading={isLoading}
        suggestions={suggestions}
        query={query}
        onClick={setQuery}
      />
    </div>
  );
};

export default App;
