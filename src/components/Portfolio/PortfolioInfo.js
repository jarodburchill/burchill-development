import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import PortfolioGroups from './PortfolioGroups';

const PortfolioInfo = () => {
  return (
    <>
      <Jumbotron>
        <h2>Portfolio</h2>
        <hr className="my-4" />
        <PortfolioGroups />
      </Jumbotron>
    </>
  );
}

export default PortfolioInfo;