import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const WeatherDetail = ({ title, value }) => (
  <div className="weather-detail">
    <h4>{title}</h4>
    <p>{value}</p>
  </div>
);

const App = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("Mumbai");

  useEffect(() => {
    fetchWeather();
  }, []);

  const fetchWeather = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/weather?city=${city}`);
      setWeather(response.data);
    } catch (error) {
      console.error("Error fetching weather data", error);
    }
  };

  return (
    <div className="container">
      {/* Main Weather Section */}
      <div className="main">
        <div className="side_box">
          <h4>Current Weather</h4>
          <p>{new Date().toLocaleTimeString()}</p>
          <div className="weather-info">
            {weather ? (
              <>
                <img
                  src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                  alt="Weather Icon"
                />
                <h2>{weather.main.temp}°C</h2>
                <p>{weather.weather[0].description}</p>
              </>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>

      {/* Additional Weather Details */}
      <div className="additional">
        {weather ? (
          <>
            <WeatherDetail title="Air Pressure" value={`${weather.main.pressure} hPa`} />
            <WeatherDetail title="Wind" value={`${weather.wind.speed} km/h`} />
            <WeatherDetail title="Humidity" value={`${weather.main.humidity}%`} />
            <WeatherDetail title="Visibility" value={`${weather.visibility / 1000} km`} />
            <WeatherDetail title="Feels Like" value={`${weather.main.feels_like}°C`} />
            <WeatherDetail title="Max Temp" value={`${weather.main.temp_max}°C`} />
            <WeatherDetail title="Min Temp" value={`${weather.main.temp_min}°C`} />
            <WeatherDetail title="Cloudiness" value={`${weather.clouds.all}%`} />
            <WeatherDetail title="Sunrise" value={new Date(weather.sys.sunrise * 1000).toLocaleTimeString()} />
            <WeatherDetail title="Sunset" value={new Date(weather.sys.sunset * 1000).toLocaleTimeString()} />
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default App;
