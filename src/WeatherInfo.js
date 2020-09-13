import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedHours from "./FormattedHours";

export default function WeatherInfo(props) {
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
              <img src={props.data.imgUrl} alt={props.data.description} />
            </div>
            <span className="temperature"> {props.data.temperature} </span>
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
              feels like {props.data.feelsLike}º
            </span>
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
      </div>
    </div>
  );
}
