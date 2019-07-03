import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

const PortfolioNET = () => {
  return (
    <>
      <Tab.Container defaultActiveKey="pong">
        <Row>
          <Col sm={3} md={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="pong">Pong Game</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="qpuzzle">Q-Puzzle Game</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9} md={7}>
            <Tab.Content>
              <Tab.Pane eventKey="pong">
                <PortfolioPongGame />
              </Tab.Pane>
              <Tab.Pane eventKey="qpuzzle">
                <PortfolioQPuzzleGame />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
}

export default PortfolioNET;