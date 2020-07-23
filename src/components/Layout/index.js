import styled from "styled-components";

const Layout = styled.div`
  min-height: 100%;
  min-width: 960px;

  margin: 0 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  footer {
    font-size: 16px;
    line-height: 26px;
    text-align: center;
    margin-top: auto;

    padding: 30px 0;
  }
`;

export default Layout;
