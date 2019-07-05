import React from 'react';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Carousel from 'react-bootstrap/Carousel';
import car1 from '../../img/car1.png';
import car2 from '../../img/car2.png';
import car3 from '../../img/car3.png';

const PortfolioCarInsuranceWebApp = () => {
  return (
    <>
      <h2>Car Insurance Web App</h2>
      <Badge variant="danger">HTML</Badge>
      <Badge variant="primary">CSS</Badge>
      <Badge variant="warning">JS</Badge>
      <Badge variant="info">jQuery</Badge>
      <Badge variant="secondary">Mobile</Badge>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={car1}
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={car2}
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={car3}
            alt=""
          />
        </Carousel.Item>
      </Carousel>
      <br />
      <Button variant="outline-dark" href="https://jarodburchill.github.io/CarInsuranceWebApp/">
        Link
      </Button>&nbsp;
      <Button variant="outline-dark" href="https://github.com/jarodburchill/CarInsuranceWebApp">
        Repository
      </Button>
    </>
  );
}

export default PortfolioCarInsuranceWebApp;