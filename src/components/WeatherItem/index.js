import React from "react";

import { Container, TemperatureInfo } from "./styles";

const WeatherItem = ({ data }) => {
  return (
    <Container>
      <img
        src={`http://openweathermap.org/img/wn/${data.icon}@2x.png`}
        alt=""
      />

      <strong>{Math.trunc(data.temp)}°</strong>
      <TemperatureInfo>
        <strong>{data.name}</strong>
        <span>{data.weather}</span>
      </TemperatureInfo>
    </Container>
  );
};

export default WeatherItem;
