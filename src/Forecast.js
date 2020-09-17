import React, { useState } from "react";
import axios from "axios";
import WeatherForecastPreview from "./WeatherForecastPreview";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function displayForecast(response) {
    setForecast(response.data);
    console.log(forecast);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="weatherForecast">
        <h2>Hourly Forecast</h2>
        <div className="row">
          <WeatherForecastPreview data={forecast.list[0]} unit={props.unit} />
          <WeatherForecastPreview data={forecast.list[1]} unit={props.unit} />
          <WeatherForecastPreview data={forecast.list[2]} unit={props.unit} />
          <WeatherForecastPreview data={forecast.list[3]} unit={props.unit} />
          <WeatherForecastPreview data={forecast.list[4]} unit={props.unit} />
          <WeatherForecastPreview data={forecast.list[5]} unit={props.unit} />
        </div>
      </div>
    );
  } else {
    let apiKey = "6140482334c764ca7fa9951280c40d98";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(displayForecast);

    return null;
  }
}
