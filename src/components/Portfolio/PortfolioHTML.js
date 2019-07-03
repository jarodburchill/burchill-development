import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

const PortfolioHTML = () => {
  return (
    <>
      <Tab.Container defaultActiveKey="lakers">
        <Row>
          <Col sm={3} md={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="lakers">Lakers Website</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="plumcreek">Plum Creek Syrup</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9} md={7}>
            <Tab.Content>
              <Tab.Pane eventKey="lakers">
                <PortfolioLakersWebsite />
              </Tab.Pane>
              <Tab.Pane eventKey="plumcreek">
                <PortfolioPlumCreekSyrup />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
}

export default PortfolioHTML;