import React from "react";
import axios from "axios";

export default function Weather() {
  return <h2>Hello from weather</h2>;

  function fetchData(response) {
    alert(`The weather for Toronto is ${response.data.main.temp}ºC`);
  }
  let key = `6140482334c764ca7fa9951280c40d98`;
  let unit = "metric";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=${key}&units=${unit}`;
  axios.get(url).then(fetchData);
}
