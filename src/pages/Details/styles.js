import styled from "styled-components";

export const Container = styled.div`
  footer {
    font-size: 16px;
    line-height: 26px;
    text-align: center;
    position: absolute;
    bottom: 0;
    margin-top: auto;
    width: 550px;
    padding: 30px 0;
  }
`;

export const DetailsWeather = styled.div`
  display: flex;
  flex-direction: column;

  background: #ffffff;
  box-shadow: 0px 4px 35px rgba(197, 198, 199, 0.25);
  border: 2px solid transparent;
  border-radius: 3px;

  width: 550px;

  padding: 20px 30px;
  margin-bottom: 17px;

  ul {
    li {
      display: flex;
      justify-content: space-between;

      padding: 10px 0;

      & + li {
        border-top: 1px solid var(--background);
      }

      > strong,
      > span {
        color: var(--title);
      }
    }
  }
`;

export const MainInfo = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 17px;

  > strong {
    font-weight: 600;
    font-size: 32px;
    line-height: 62px;
    color: var(--primary);

    padding: 0 25px;
    margin-left: 25px;
    border-left: 2px solid var(--background);
  }
`;

export const TemperatureInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > strong {
    font-weight: bold;
    font-size: 18px;
    line-height: 28px;
    text-transform: capitalize;
    color: var(--title);
  }

  > span {
    font-size: 16px;
    line-height: 26px;
    text-transform: capitalize;
    color: var(--text);
  }
`;

export const ReturnButton = styled.div`
  text-align: center;

  a {
    color: var(--text);
  }
`;
