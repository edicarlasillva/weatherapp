import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;

    width: 100%;
    height: 100%;
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
    color: var(--text);
  }

  *, button, input {
    border: 0;
    outline: 0;
    font-family: 'Noto Sans', sans-serif;
  }

  button {
    cursor: pointer;
    background: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Mulish', sans-serif;
    font-weight: bold;
    color: var(--title);
  }

  a {
    text-decoration: none;
  }

  ul{
    list-style: none;
  }

  :root {
    --primary: #335DFF;
    --text: #B2B6BB;
    --title: #1C1D24;
    --background: #F7F8FC;
    --white: #FFFFFF;
  }
`;
