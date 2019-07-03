import React from 'react';
import HomeInfo from './HomeInfo';
import HomeForm from './HomeForm';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HomePage = (props) => {
  props.setActivePage();
  return (
    <>
      <Container className="PageContainer" fluid>
        <Row className="justify-content-center">
          <Col xs={12} md={8}>
            <HomeInfo />
          </Col>
          <Col xs={12} md={4}>
            <HomeForm />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HomePage;