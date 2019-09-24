import React from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import Navbar from "./Navbar";

const theme = {
  primary: "rgba(255, 255, 255, 0.9)"
};

const Container = styled.div`
  margin-top: 10vh;
  padding: 10%;
  width: 100%;
  min-height: 50vh;
  position: relative;
  background: inherit;
  overflow: hidden;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    background: inherit;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: inset 0 0 0 2000px rgba(255, 255, 255, 0.5);
    filter: blur(10px);
    margin: -20px;
    z-index: -1;
  }
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Navbar />
        <GlobalStyle />
        <Container>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
          consequatur soluta modi voluptates sed hic optio itaque sunt nisi
          reprehenderit tenetur doloremque ratione quasi ducimus officia, illo
          architecto accusamus eaque? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Quod obcaecati animi qui praesentium fugiat soluta
          temporibus impedit magni, incidunt laudantium nesciunt, aliquam
          quisquam. Eos harum aliquid, qui facilis assumenda error? Lorem ipsum
          dolor sit, amet consectetur adipisicing elit. Asperiores consequatur
          soluta modi voluptates sed hic optio itaque sunt nisi reprehenderit
          tenetur doloremque ratione quasi ducimus officia, illo architecto
          accusamus eaque? Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Quod obcaecati animi qui praesentium fugiat soluta temporibus
          impedit magni, incidunt laudantium nesciunt, aliquam quisquam. Eos
          harum aliquid, qui facilis assumenda error?
        </Container>
        <Container>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
          consequatur soluta modi voluptates sed hic optio itaque sunt nisi
          reprehenderit tenetur doloremque ratione quasi ducimus officia, illo
          architecto accusamus eaque? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Quod obcaecati animi qui praesentium fugiat soluta
          temporibus impedit magni, incidunt laudantium nesciunt, aliquam
          quisquam. Eos harum aliquid, qui facilis assumenda error? Lorem ipsum
          dolor sit, amet consectetur adipisicing elit. Asperiores consequatur
          soluta modi voluptates sed hic optio itaque sunt nisi reprehenderit
          tenetur doloremque ratione quasi ducimus officia, illo architecto
          accusamus eaque? Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Quod obcaecati animi qui praesentium fugiat soluta temporibus
          impedit magni, incidunt laudantium nesciunt, aliquam quisquam. Eos
          harum aliquid, qui facilis assumenda error?
        </Container>
        <Container>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
          consequatur soluta modi voluptates sed hic optio itaque sunt nisi
          reprehenderit tenetur doloremque ratione quasi ducimus officia, illo
          architecto accusamus eaque? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Quod obcaecati animi qui praesentium fugiat soluta
          temporibus impedit magni, incidunt laudantium nesciunt, aliquam
          quisquam. Eos harum aliquid, qui facilis assumenda error? Lorem ipsum
          dolor sit, amet consectetur adipisicing elit. Asperiores consequatur
          soluta modi voluptates sed hic optio itaque sunt nisi reprehenderit
          tenetur doloremque ratione quasi ducimus officia, illo architecto
          accusamus eaque? Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Quod obcaecati animi qui praesentium fugiat soluta temporibus
          impedit magni, incidunt laudantium nesciunt, aliquam quisquam. Eos
          harum aliquid, qui facilis assumenda error?
        </Container>
      </>
    </ThemeProvider>
  );
};

export default App;
