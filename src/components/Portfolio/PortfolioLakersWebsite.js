import React from 'react';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Carousel from 'react-bootstrap/Carousel';
import lakers1 from '../../img/lakers1.png';
import lakers2 from '../../img/lakers2.png';
import lakers3 from '../../img/lakers3.png';

const PortfolioLakersWebsite = () => {
  return (
    <>
      <h2>Lakers Website</h2>
      <Badge variant="danger">HTML</Badge>
      <Badge variant="primary">CSS</Badge>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={lakers1}
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={lakers2}
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={lakers3}
            alt=""
          />
        </Carousel.Item>
      </Carousel>
      <br />
      <Button variant="outline-dark" href="https://jarodburchill.github.io/LakersWebsite/">
        Link
      </Button>&nbsp;
      <Button variant="outline-dark" href="https://github.com/jarodburchill/LakersWebsite">
        Repository
      </Button>
    </>
  );
}

export default PortfolioLakersWebsite;