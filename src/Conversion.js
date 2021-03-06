import React from "react";

export default function Conversion(props) {
  function showImperial(event) {
    event.preventDefault();
    props.setUnit("imperial");
  }
  function showMetric(event) {
    event.preventDefault();
    props.setUnit("metric");
  }
  if (props.unit === "metric") {
    return (
      <div className="clearfix">
        <span className="temperature"> {props.celsius} </span>
        <span className="unit">
          ºC |{" "}
          <a href="_blank" className="imperial" onClick={showImperial}>
            ºF
          </a>
        </span>
        <br />
        <span className="feelsLike">feels like {props.feelsLike}º</span>
      </div>
    );
  } else {
    return (
      <div className="clearfix">
        <span className="temperature">
          {" "}
          {Math.round((props.celsius * 9) / 5 + 32)}{" "}
        </span>
        <span className="unit">
          <a href="_blank" onClick={showMetric}>
            ºC
          </a>{" "}
          | ºF
        </span>
        <br />
        <span className="feelsLike">
          feels like {Math.round((props.feelsLike * 9) / 5 + 32)}º
        </span>
      </div>
    );
  }
}
