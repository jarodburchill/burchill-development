import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import Navbar from "./Navbar";
import Home from "./Home";
import Projects from "./Projects";
import Blog from "./Blog";

const theme = {
  primary: "rgb(0, 0, 0)",
  secondary: "rgb(255, 255, 255)"
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Router>
          <Navbar
            title="Burchill Development"
            bg={theme.primary}
            fg={theme.secondary}
          >
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </Navbar>
          <Route path="/" exact component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/blog" component={Blog} />
        </Router>
        <GlobalStyle />
      </>
    </ThemeProvider>
  );
};

export default App;
