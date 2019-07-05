import React from 'react';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Carousel from 'react-bootstrap/Carousel';
import review1 from '../../img/review1.png';
import review2 from '../../img/review2.png';
import review3 from '../../img/review3.png';

function PortfolioMobileReviewWebApp(props) {
  return (
    <>
      <h2>Mobile Review Web App</h2>
      <Badge variant="danger">HTML</Badge>
      <Badge variant="primary">CSS</Badge>
      <Badge variant="warning">JS</Badge>
      <Badge variant="info">jQuery</Badge>
      <Badge variant="secondary">Mobile</Badge>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={review1}
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={review2}
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={review3}
            alt=""
          />
        </Carousel.Item>
      </Carousel>
      <br />
      <Button variant="outline-dark" href="https://jarodburchill.github.io/MobileWebPrototype/">
        Link
      </Button>&nbsp;
      <Button variant="outline-dark" href="https://github.com/jarodburchill/MobileWebPrototype">
        Repository
      </Button>
    </>
  );
}

export default PortfolioMobileReviewWebApp;