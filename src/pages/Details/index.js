import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import api from "./../../services/api";

import Layout from "../../components/Layout";
import Header from "../../components/Header";

import {
  Container,
  DetailsWeather,
  MainInfo,
  TemperatureInfo,
  ReturnButton,
} from "./styles";

const key = "18b7ef85a55a1e56d924fdd86b1669f5";

const Details = () => {
  let { id } = useParams();

  const [infos, setInfos] = useState({});
  const [city, setCity] = useState({});
  const [weather, setWeather] = useState({});

  useEffect(() => {
    api.get(`?id=${id}&units=metric&appid=${key}`).then((response) => {
      setInfos(response.data.main);
      setCity(response.data);
      setWeather(response.data.weather[0]);
    });
  }, []);

  return (
    <>
      <Layout>
        <Container>
          <Header />
          <DetailsWeather>
            {infos && (
              <>
                <MainInfo>
                  <img
                    src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                    alt=""
                  />
                  <strong>{Math.trunc(infos.temp)} º</strong>

                  <TemperatureInfo>
                    <strong>{city.name}</strong>
                    <span>{weather.description}</span>
                  </TemperatureInfo>
                </MainInfo>
                <ul>
                  <li>
                    <strong>Temperature Min/Max</strong>
                    <span>
                      {Math.trunc(infos.temp_min)}º/{Math.trunc(infos.temp_max)}
                      º
                    </span>
                  </li>

                  <li>
                    <strong>Humidity</strong>
                    <span>{infos.humidity}%</span>
                  </li>

                  <li>
                    <strong>Pressure</strong>
                    <span>{infos.pressure}mb</span>
                  </li>
                </ul>
              </>
            )}
          </DetailsWeather>
          <ReturnButton>
            <Link to="/">Voltar</Link>
          </ReturnButton>
          <footer>© Weatherapp </footer>
        </Container>
      </Layout>
    </>
  );
};

export default Details;
