import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

const PortfolioReact = () => {
  return (
    <>
      <Tab.Container defaultActiveKey="burchilldev">
        <Row>
          <Col sm={3} md={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="burchilldev">Burchill Development</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9} md={7}>
            <Tab.Content>
              <Tab.Pane eventKey="burchilldev">
                <PortfolioBurchillDevelopment />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
}

export default PortfolioReact;