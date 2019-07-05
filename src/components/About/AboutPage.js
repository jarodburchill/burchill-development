import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AboutBio from './AboutBio';
import AboutSkills from './AboutSkills';

const AboutPage = (props) => {
  props.setActivePage();
  return (
    <>
      <Container className="PageContainer" fluid>
        <Row>
          <Col xs={12} md={8}>
            <AboutBio />
          </Col>
          <Col xs={12} md={4}>
            <AboutSkills />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AboutPage;