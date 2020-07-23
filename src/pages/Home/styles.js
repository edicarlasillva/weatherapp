import styled from "styled-components";

export const Container = styled.div`
  text-align: center;

  .hero {
    margin: 81px 0;

    h1 {
      font-weight: 900;
      font-size: 52px;
      line-height: 62px;
      margin-bottom: 23px;
    }

    h2 {
      font-family: "Noto Sans", sans-serif;
      font-weight: 400;
      font-size: 30px;
      line-height: 41px;
      color: var(--text);
    }
  }
`;

export const SearchField = styled.div`
  display: flex;
  min-width: 550px;
  max-width: 100%;

  height: 60px;
  background: #ffffff;
  box-shadow: 0px 4px 35px rgba(197, 198, 199, 0.25);
  border-radius: 3px;
  padding: 10px;
  margin-bottom: 17px;

  form {
    display: flex;
    align-items: center;

    width: 100%;

    > input {
      width: 100%;
      font-weight: 500;
      font-size: 16px;
      line-height: 22px;
      color: var(--text);
      padding-left: 10px;

      &::placeholder {
        font-weight: 500;
        font-size: 16px;
        line-height: 22px;
        color: var(--text);
      }
    }

    > button {
      background-color: var(--primary);
      border-radius: 3px;
      width: 46px;
      height: 46px;
      padding: 12px;
      transition: background-color 0.2s;

      &:hover {
        background-color: blue;
      }
    }
  }
`;

export const WeatherList = styled.div``;
