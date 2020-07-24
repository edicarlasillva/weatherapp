import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  a {
    display: flex;
    align-items: center;

    background: #ffffff;
    box-shadow: 0px 4px 35px rgba(197, 198, 199, 0.25);
    border: 2px solid transparent;
    border-radius: 3px;

    width: 550px;

    padding: 20px 30px;
    margin-bottom: 17px;

    cursor: pointer;

    transition: border 0.2s;

    > strong {
      font-weight: 600;
      font-size: 32px;
      line-height: 62px;
      color: var(--primary);

      padding: 0 25px;
      margin-left: 25px;
      border-left: 2px solid var(--background);
    }

    &:hover {
      border: 2px solid var(--primary);
    }
  }

  > button {
    position: absolute;
    right: 20px;
    top: 20px;

    width: 20px;
    height: 20px;

    color: var(--primary);
    font-size: 16px;
    font-weight: bold;
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
