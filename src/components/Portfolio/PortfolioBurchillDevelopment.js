import React from 'react';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

const PortfolioBurchillDevelopment = (props) => {
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


export default PortfolioBurchillDevelopment;