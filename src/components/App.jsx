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
  padding: 10%;
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
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
      </div>
    </ThemeProvider>
  );
};

export default App;
