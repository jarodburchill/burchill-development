import React from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";

const theme = {
  primary: "rgb(35, 154, 201)"
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${props => props.theme.primary};
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyle />
      </Container>
    </ThemeProvider>
  );
};

export default App;
