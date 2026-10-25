function WeatherCard({ weather }) {
  return (
    <div className="weather-card">
      <h2>{weather.city}</h2>

      <p className="temperature">
        {Math.round(weather.temperature)}°C
      </p>

      <p>Wind speed: {weather.windSpeed} km/h</p>
    </div>
  );
}

export default WeatherCard;