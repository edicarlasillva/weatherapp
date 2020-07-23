import React, { useState } from "react";

import { Link } from "react-router-dom";

import api from "./../../services/api";

import Layout from "../../components/Layout";
import Header from "../../components/Header";
import AddIcon from "../../components/AddIcon";
import WeatherItem from "../../components/WeatherItem";

import { Container, SearchField, WeatherList } from "./styles";

const key = "18b7ef85a55a1e56d924fdd86b1669f5";

const Home = () => {
  const [value, setValue] = useState("");
  const [cards, setCards] = useState([]);

  function handleInputChange(event) {
    setValue(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await api.get(`?q=${value}&units=metric&appid=${key}`);

    const data = {
      id: response.data.id,
      name: response.data.name,
      temp: response.data.main.temp,
      weather: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    };

    setCards([...cards, data]);

    setValue("");
  }

  return (
    <>
      <Layout>
        <Container>
          <Header />
          <div className="hero">
            <h1>Explore weather</h1>
            <h2>Several cities in the world</h2>
          </div>
          <SearchField>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Enter the name of a city"
                onChange={handleInputChange}
                value={value}
              />
              <button type="submit">
                <AddIcon />
              </button>
            </form>
          </SearchField>
          <WeatherList>
            {cards.map((card) => (
              <Link to={`details/${card.name}`}>
                <WeatherItem key={card.id} data={card} />
              </Link>
            ))}
          </WeatherList>
        </Container>
        <footer>© Weatherapp </footer>
      </Layout>
    </>
  );
};

export default Home;
