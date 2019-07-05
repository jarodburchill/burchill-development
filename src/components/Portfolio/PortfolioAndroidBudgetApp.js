import React from 'react';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Carousel from 'react-bootstrap/Carousel';
import budget1 from '../../img/budget1.png';
import budget2 from '../../img/budget2.png';
import budget3 from '../../img/budget3.png';

const PortfolioAndroidBudgetApp = () => {
  return (
    <>
      <h2>Android Budget App</h2>
      <Badge variant="danger">HTML</Badge>
      <Badge variant="primary">CSS</Badge>
      <Badge variant="warning">JS</Badge>
      <Badge variant="info">jQuery</Badge>
      <Badge variant="success">Android</Badge>
      <Badge variant="secondary">Mobile</Badge>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={budget1}
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={budget2}
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={budget3}
            alt=""
          />
        </Carousel.Item>
      </Carousel>
      <br />
      <Button variant="outline-dark" href="https://github.com/jarodburchill/AndroidBudgetApp">
        Repository
      </Button>
    </>
  );
}

export default PortfolioAndroidBudgetApp