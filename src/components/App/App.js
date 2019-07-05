import React, { useState } from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import '../../styles/Site.css';
import AppNavbar from './AppNavbar';
import AppFooter from './AppFooter';
import HomePage from '../Home/HomePage';
import PortfolioPage from '../Portfolio/PortfolioPage';
import AboutPage from '../About/AboutPage';
import ContactPage from '../Contact/ContactPage';

const App = () => {
  const [activePage, setActivePage] = useState("home");

  return (
    <>
      <Router>
        <AppNavbar activePage={activePage} />
        <Route
          exact path="/"
          render={(props) => <HomePage {...props} setActivePage={() => setActivePage("home")} />}
        />
        <Route
          path="/portfolio"
          render={(props) => <PortfolioPage {...props} setActivePage={() => setActivePage("portfolio")} />}
        />
        <Route
          path="/about"
          render={(props) => <AboutPage {...props} setActivePage={() => setActivePage("about")} />}
        />
        <Route
          path="/contact"
          render={(props) => <ContactPage {...props} setActivePage={() => setActivePage("contact")} />}
        />
        <AppFooter />
      </Router>
    </>
  );
}

export default App;
