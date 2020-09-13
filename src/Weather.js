import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import FormattedHours from "./FormattedHours";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function fetchData(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      feelsLike: Math.round(response.data.main.feels_like),
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      imgUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      sunrise: new Date(response.data.sys.sunrise * 1000),
      sunset: new Date(response.data.sys.sunset * 1000),
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="navbar">
          <nav className="navbar navbar-light bg-light">
            <a href="_blank" className="navbar-brand">
              Current Weather{" "}
            </a>
            <form className="form-inline" id="search-form">
              <div className="input">
                <input
                  className="form-control mr-sm-3"
                  type="Search"
                  autocomplete="off"
                  autoFocus="on"
                  placeholder="Search for city..."
                  aria-label="Search"
                  id="search-text-input"
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
                type="button"
                value="Search"
              >
                Current
              </button>
            </form>
          </nav>
        </div>
        <div className="container-flex">
          <h1 className="cityName"> {weatherData.city} </h1>
          <ul className="city">
            <li>
              <FormattedDate date={weatherData.date} />
            </li>
            <li>{weatherData.description}</li>
          </ul>
          <div className="row">
            <div className="col-7">
              <div className="clearfix icon">
                <img src={weatherData.imgUrl} alt="" />
              </div>
              <span className="temperature"> {weatherData.temperature} </span>
              <span className="unit">
                <a href="_blank" className="metric">
                  ºC
                </a>{" "}
                |{" "}
                <a href="_blank" className="imperial">
                  ºF
                </a>
              </span>
              <br />
              <span className="feelsLike">
                feels like {weatherData.feelsLike}º
              </span>
            </div>
            <div className="col-5">
              <div className="conditions">
                <p>
                  <strong>Humidity:</strong> {weatherData.humidity}%
                </p>
                <p>
                  <strong>Wind:</strong> {weatherData.wind} km/h
                </p>
                <p>
                  <FormattedHours
                    time={`Sunrise:`}
                    date={weatherData.sunrise}
                  />
                </p>
                <p>
                  <FormattedHours time={`Sunset:`} date={weatherData.sunset} />{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = `6140482334c764ca7fa9951280c40d98`;
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(fetchData);

    return "Loading...";
  }
}
