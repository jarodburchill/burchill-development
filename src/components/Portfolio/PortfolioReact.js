import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import PortfolioBurchillDevelopment from './PortfolioBurchillDevelopment';
import Calculator from './Calculator/Calculator';

const PortfolioReact = () => {
  return (
    <>
      <Tab.Container defaultActiveKey="calculator">
        <Row>
          <Col sm={3} md={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="calculator">React Calculator</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="burchilldev">Burchill Development</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9} md={7}>
            <Tab.Content>
              <Tab.Pane eventKey="calculator">
                <Calculator />
              </Tab.Pane>
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