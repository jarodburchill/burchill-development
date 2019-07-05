import React from 'react';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Carousel from 'react-bootstrap/Carousel';
import pong1 from '../../img/pong1.png';
import pong2 from '../../img/pong2.png';
import pong3 from '../../img/pong3.png';

const PortfolioPongGame = () => {
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


export default PortfolioPongGame;