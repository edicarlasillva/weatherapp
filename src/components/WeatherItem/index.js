import React from "react";

import { Link } from "react-router-dom";

import { Container, TemperatureInfo } from "./styles";

const WeatherItem = ({ data, details, remove }) => {
  return (
    <Container>
      <Link to={details}>
        <img
          src={`http://openweathermap.org/img/wn/${data.icon}@2x.png`}
          alt=""
        />

        <strong>{Math.trunc(data.temp)}°</strong>
        <TemperatureInfo>
          <strong>{data.name}</strong>
          <span>{data.weather}</span>
        </TemperatureInfo>
      </Link>
      <button type="button" onClick={remove}>
        x
      </button>
    </Container>
  );
};

export default WeatherItem;
