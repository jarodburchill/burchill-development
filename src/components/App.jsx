import React from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import Navbar from "./Navbar";

const theme = {
  primary: "rgba(255, 255, 255, 0.9)"
};

const Container = styled.div`
  margin-top: 10vh;
  width: 100%;
  min-height: 50vh;
  background: ${props => props.theme.primary};
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Navbar />
        <GlobalStyle />
        <Container></Container>
      </div>
    </ThemeProvider>
  );
};

export default App;
