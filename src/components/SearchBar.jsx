import { useState } from 'react';

function SearchBar({ onSearch }) {
  const [city, setCity] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    if (city.trim()) {
      onSearch(city.trim());
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a city..."
        value={city}
        onChange={(event) => setCity(event.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;