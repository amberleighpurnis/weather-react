import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import FormattedHours from "./FormattedHours";
import WeatherIcon from "./WeatherIcon";
import Conversion from "./Conversion";
import Forecast from "./Forecast";

export default function WeatherInfo(props) {
  const [unit, setUnit] = useState("metric");
  return (
    <div className="WeatherInfo">
      <div className="container-flex">
        <h1 className="cityName"> {props.data.city} </h1>
        <ul className="city">
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li>{props.data.description}</li>
        </ul>
        <div className="row">
          <div className="col-7">
            <div className="clearfix icon">
              <div className="float-left">
                <div className="clearfix">
                  <WeatherIcon code={props.data.icon} />
                </div>
              </div>
            </div>
            <Conversion
              celsius={props.data.temperature}
              feelsLike={props.data.feelsLike}
              unit={unit}
              setUnit={setUnit}
            />
          </div>
          <div className="col-5">
            <div className="conditions">
              <ul className="conditions">
                <li>
                  <strong>Humidity:</strong> {props.data.humidity}%
                </li>
                <li>
                  <strong>Wind:</strong> {props.data.wind} km/h
                </li>
                <li>
                  <FormattedHours time={`Sunrise:`} date={props.data.sunrise} />
                </li>
                <li>
                  <FormattedHours time={`Sunset:`} date={props.data.sunset} />{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Forecast city={props.data.city} unit={unit} />
      </div>
    </div>
  );
}
