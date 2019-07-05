import React from 'react';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Carousel from 'react-bootstrap/Carousel';
import plumcreek1 from '../../img/plumcreek1.png'

const PortfolioPlumCreekSyrup = () => {
  return (
    <>
      <h2>Plum Creek Syrup</h2>
      <Badge variant="danger">HTML</Badge>
      <Badge variant="primary">CSS</Badge>
      <Badge variant="info">Bootstrap</Badge>
      <Badge variant="secondary">Mobile</Badge>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={plumcreek1}
            alt=""
          />
        </Carousel.Item>
      </Carousel>
      <br />
      <Button variant="outline-dark" href="https://jarodburchill.github.io/PlumCreekSyrup/">
        Link
      </Button>&nbsp;
      <Button variant="outline-dark" href="https://github.com/jarodburchill/PlumCreekSyrup">
        Repository
      </Button>
    </>
  );
}


export default PortfolioPlumCreekSyrup;