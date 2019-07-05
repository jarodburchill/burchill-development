import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContactInfo from './ContactInfo';

const ContactPage = (props) => {
  props.setActivePage();
  return (
    <>
      <Container className="PageContainer" fluid>
        <Row className="justify-content-center">
          <Col xs={12} md={12}>
            <ContactInfo />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ContactPage;