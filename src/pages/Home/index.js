import React, { useState, useEffect } from "react";

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

  useEffect(() => {
    const cardList = localStorage.getItem("cards");

    if (cardList) {
      setCards(JSON.parse(cardList));
    }
  }, []);

  useEffect(() => localStorage.setItem("cards", JSON.stringify(cards)));

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await api.get(`?q=${value}&units=metric&appid=${key}`);

    const data = {
      id: response.data.id,
      name: response.data.name,
      temp: response.data.main.temp,
      weather: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    };

    setCards([data, ...cards]);

    setValue("");
  };

  const handleRemoveItem = (index) => {
    const listCards = cards.slice();

    listCards.splice(index, 1);
    setCards(listCards);
  };

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
            {cards.map((card, index) => (
              <WeatherItem
                key={card.index}
                data={card}
                details={`/details/${card.id}`}
                remove={() => handleRemoveItem(index)}
              />
            ))}
          </WeatherList>
        </Container>
        <footer>© Weatherapp </footer>
      </Layout>
    </>
  );
};

export default Home;
