import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastConversion(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }
  if (props.setUnit === "imperial") {
    return (
      <div className="col-2">
        <ul className="forecastLayout">
          <li>{hours()}</li>
          <li>
            <div className="forecastIcon">
              <WeatherIcon code={props.data.weather[0].icon} />
            </div>
          </li>

          <li>
            <strong>
              {Math.round((props.data.main.temp_max * 9) / 5 + 32)}º
            </strong>{" "}
            {""}
            {Math.round((props.data.main.temp_min * 9) / 5 + 32)}
          </li>
          <li>
            <div className="forecastDescription">
              {props.data.weather[0].description}
            </div>{" "}
          </li>
        </ul>
      </div>
    );
  }
}
