import React from 'react';
import PortfolioInfo from './PortfolioInfo';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PortfolioPage = (props) => {
  props.setActivePage();
  return (
    <>
      <Container className="PageContainer" fluid>
        <Row className="justify-content-center">
          <Col xs={12} md={12}>
            <PortfolioInfo />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default PortfolioPage;