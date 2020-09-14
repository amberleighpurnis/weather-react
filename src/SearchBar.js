import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

import "./SearchBar.css";

export default function SearchBar(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function fetchData(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      feelsLike: Math.round(response.data.main.feels_like),
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      humidity: Math.round(response.data.main.humidity),
      wind: Math.round(response.data.wind.speed),
      sunrise: new Date(response.data.sys.sunrise * 1000),
      sunset: new Date(response.data.sys.sunset * 1000),
    });
  }
  function myCurrentLocation() {
    navigator.geolocation.getCurrentPosition(currentLocation);
  }
  function currentLocation(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiKey = "6140482334c764ca7fa9951280c40d98";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(fetchData);

    //apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${unit}`;
    //axios.get(apiUrl).then(displayForecast);
  }

  function searchedCity(event) {
    event.preventDefault();
    search();
  }

  function cityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = `6140482334c764ca7fa9951280c40d98`;
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(fetchData);
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="navbar">
          <nav className="navbar navbar-light bg-light">
            <a href="_blank" className="navbar-brand">
              Current Weather{" "}
            </a>
            <form
              className="form-inline"
              id="search-form"
              onSubmit={searchedCity}
            >
              <div className="input">
                <input
                  className="form-control mr-sm-3"
                  type="Search"
                  autoComplete="off"
                  autoFocus="on"
                  placeholder="Search for city..."
                  aria-label="Search"
                  id="search-text-input"
                  onChange={cityChange}
                />
              </div>
              <button
                className="btn btn-info my-2 my-sm-0"
                type="submit"
                value="Search"
              >
                Search
              </button>
              <button
                className="btn btn-info my-2 my-sm-0"
                type="submit"
                value="Search"
                onClick={myCurrentLocation}
              >
                Current
              </button>
            </form>
          </nav>
        </div>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
