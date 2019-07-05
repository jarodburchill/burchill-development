import React, { useState } from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import '../../styles/App.css';
import AppNavbar from './AppNavbar';
import AppFooter from './AppFooter';
import HomePage from '../Home/HomePage';
import PortfolioPage from '../Portfolio/PortfolioPage';

import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import ListGroup from 'react-bootstrap/ListGroup';
import Carousel from 'react-bootstrap/Carousel';
import qpuzzle1 from '../../img/qpuzzle1.png';
import qpuzzle2 from '../../img/qpuzzle2.png';
import pong1 from '../../img/pong1.png';
import pong2 from '../../img/pong2.png';
import pong3 from '../../img/pong3.png';

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

function PortfolioBurchillDevelopment(props) {
  return (
    <>
      <h2>Burchill Development (this site)</h2>
      <Badge variant="primary">React</Badge>
      <Badge variant="warning">JS</Badge>
      <Badge variant="info">Bootstrap</Badge>
      <Badge variant="secondary">Mobile</Badge>
      <br /><br />
      <Button variant="outline-dark" href="https://github.com/jarodburchill/BurchillDevelopment">
        Repository
      </Button>
    </>
  );
}

function PortfolioPongGame(props) {
  return (
    <>
      <h2>Pong Game</h2>
      <Badge variant="success">C#</Badge>
      <Badge variant="secondary">MonoGame</Badge>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pong1}
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pong2}
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pong3}
            alt=""
          />
        </Carousel.Item>
      </Carousel>
      <br />
      <Button variant="outline-dark" href="https://github.com/jarodburchill/PongGame">
        Repository
      </Button>
    </>
  );
}

function PortfolioQPuzzleGame(props) {
  return (
    <>
      <h2>Q-Puzzle Game</h2>
      <Badge variant="success">C#</Badge>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={qpuzzle1}
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={qpuzzle2}
            alt=""
          />
        </Carousel.Item>
      </Carousel>
      <br />
      <Button variant="outline-dark" href="https://github.com/jarodburchill/QPuzzleGame">
        Repository
      </Button>
    </>
  );
}

function AboutPage(props) {
  props.setActivePage();
  return (
    <>
      <Container className="PageContainer" fluid>
        <Row>
          <Col xs={12} md={8}>
            <AboutBio />
          </Col>
          <Col xs={12} md={4}>
            <AboutSkills />
          </Col>
        </Row>
      </Container>
    </>
  );
}

function AboutBio(props) {
  let diff = (new Date().getTime() - new Date("July 5, 1999 00:00:00").getTime()) / 1000;
  diff /= (60 * 60 * 24);
  diff /= 365.25;
  let age = Math.floor(diff);
  return (
    <>
      <Jumbotron>
        <h2>Jarod Burchill</h2>
        <hr className="my-4" />
        <h4>Who Am I?</h4>
        <hr className="my-4" />

        <p className="lead">{age} year-old freelance software developer located in the Kitchener/Waterloo area.</p>
        <p className="lead">Big believer in agile, test-driven, object-oriented software development.</p>
        <p className="lead">Developer that has tremendous hands-on experience with web
            development in HTML5, CSS3, JavaScript, Bootstrap, jQuery, PHP, and ASP.NET via personal
            projects and post secondary education assignments and labs.</p>
        <br />
        <h4>Education</h4>
        <hr className="my-4" />
        <p className="lead">Recently completed my second year of the Computer Programmer/Analyst Program at
            Conestoga College: Institute of Technology and Advanced Learning.</p>
        <p className="lead">89.46% weighted average.</p>
        <p className="lead">Currently on a co-op work term at the Waterloo Regional Police Service as a
            Programmer/Analyst.</p>
        <br />
        <h4>Hobbies and Interests</h4>
        <hr className="my-4" />
        <p className="lead">Solving complex puzzles such as rubik's cubes.</p>
        <p className="lead">Staying active by taking part in sports such as basketball, wrestling and snowboarding.</p>
        <p className="lead">Hanging out with my golden retriever, Gemma:)</p>
      </Jumbotron>
    </>
  );
}

function AboutSkills(props) {
  return (
    <>
      <Jumbotron>
        <h2>Skills</h2>
        <hr className="my-4" />
        <p className="lead">HTML</p>
        <p className="lead">CSS</p>
        <p className="lead">Sass</p>
        <p className="lead">Bootstrap</p>
        <p className="lead">JavaScript</p>
        <p className="lead">TypeScript</p>
        <p className="lead">React</p>
        <p className="lead">jQuery</p>
        <p className="lead">Node.js</p>
        <p className="lead">Express.js</p>
        <p className="lead">PHP</p>
        <p className="lead">Laravel</p>
        <p className="lead">ASP.NET</p>
        <p className="lead">C#.NET</p>
        <p className="lead">VB.NET</p>
        <p className="lead">Java</p>
        <p className="lead">T-SQL</p>
        <p className="lead">MySQL</p>
        <p className="lead">SQLite</p>
        <p className="lead">Git</p>
        <hr className="my-4" />
      </Jumbotron>
    </>
  );
}

function ContactPage(props) {
  props.setActivePage();
  return (
    <>
      <Container className="PageContainer" fluid>
        <Row className="justify-content-center">
          <Col xs={12} md={12}>
            <ContactInfo />
          </Col>
        </Row>
      </Container>
    </>
  );
}

function ContactInfo(props) {
  return (
    <>
      <Jumbotron>
        <h2>Contact</h2>
        <hr className="my-4" />
        <ListGroup>
          <ListGroup.Item action href="tel:15192828028" variant="light">
            +1 519-282-8028
          </ListGroup.Item>
          <br />
          <ListGroup.Item action href="mailto:jarod@burchilldevelopment.com" variant="light">
            jarod@burchilldevelopment.com
          </ListGroup.Item>
          <br />
          <ListGroup.Item action href="https://www.linkedin.com/in/jarodburchill/" variant="light">
            LinkedIn
          </ListGroup.Item>
          <br />
          <ListGroup.Item action href="https://www.freelancer.ca/u/jarodburchill" variant="light">
            Freelancer
          </ListGroup.Item>
          <br />
          <ListGroup.Item action href="https://github.com/jarodburchill" variant="light">
            GitHub
          </ListGroup.Item>
          <br />
          <ListGroup.Item action href="https://twitter.com/jarodburchill" variant="light">
            Twitter
          </ListGroup.Item>
          <br />
          <ListGroup.Item action href="https://www.instagram.com/burchilldevelopment/" variant="light">
            Instagram
          </ListGroup.Item>
          <br />
        </ListGroup>
      </Jumbotron>
    </>
  );
}

export default App;
