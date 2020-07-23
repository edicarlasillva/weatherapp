import React from "react";

import Layout from "../../components/Layout";
import Header from "../../components/Header";

import { Container, DetailsWeather, MainInfo, TemperatureInfo } from "./styles";

const Details = () => {
  return (
    <>
      <Layout>
        <Container>
          <Header />
          <DetailsWeather>
            <MainInfo>
              <img src={`http://openweathermap.org/img/wn/03d@2x.png`} alt="" />

              <strong>23°</strong>
              <TemperatureInfo>
                <strong>New York</strong>
                <span>Nublado</span>
              </TemperatureInfo>
            </MainInfo>
            <ul>
              <li>
                <strong>Temperature Min/Max</strong>
                <span>23º/23º</span>
              </li>

              <li>
                <strong>Wind</strong>
                <span>8km/h</span>
              </li>

              <li>
                <strong>Humidity</strong>
                <span>79%</span>
              </li>

              <li>
                <strong>Pressure</strong>
                <span>925.04mb</span>
              </li>
            </ul>
          </DetailsWeather>
          <footer>© Weatherapp </footer>
        </Container>
      </Layout>
    </>
  );
};

export default Details;
