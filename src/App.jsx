import { useState, useEffect } from 'react';

import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';

import './App.css';

function App() {
  const [city, setCity] = useState('Beirut');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function fetchWeather(cityName) {
    setLoading(true);
    setError('');
    setWeather(null);

    try {
      const geoResponse = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityName)}&count=1&language=en&format=json`
      );

      if (!geoResponse.ok) {
        throw new Error('Unable to search for this city.');
      }

      const geoData = await geoResponse.json();

      if (!geoData.results || geoData.results.length === 0) {
        throw new Error('City not found. Please try another city.');
      }

      const location = geoData.results[0];

      const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,wind_speed_10m`
      );

      if (!weatherResponse.ok) {
        throw new Error('Unable to fetch weather data.');
      }

      const weatherData = await weatherResponse.json();

      setWeather({
        city: location.name,
        temperature: weatherData.current.temperature_2m,
        windSpeed: weatherData.current.wind_speed_10m,
      });

      setCity(location.name);
    } catch (err) {
      setError(err.message || 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchWeather('Beirut');
  }, []);

  function handleSearch(cityName) {
    fetchWeather(cityName);
  }

  return (
    <div className="app">
      <h1>Weather Dashboard</h1>

      <SearchBar onSearch={handleSearch} />

      {loading && <LoadingSpinner />}

      {error && <ErrorMessage message={error} />}

      {weather && !loading && !error && (
        <WeatherCard weather={weather} />
      )}
    </div>
  );
}

export default App;