import React from 'react';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Carousel from 'react-bootstrap/Carousel';
import qpuzzle1 from '../../img/qpuzzle1.png';
import qpuzzle2 from '../../img/qpuzzle2.png';

const PortfolioQPuzzleGame = () => {
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

export default PortfolioQPuzzleGame;