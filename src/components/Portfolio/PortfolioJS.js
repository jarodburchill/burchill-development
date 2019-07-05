import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import PortfolioAndroidBudgetApp from './PortfolioAndroidBudgetApp';

const PortfolioJS = () => {
  return (
    <>
      <Tab.Container defaultActiveKey="budget">
        <Row>
          <Col sm={3} md={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="budget">Android Budget App</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="car">Car Insurance Web App</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="review">Mobile Review Web App</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9} md={7}>
            <Tab.Content>
              <Tab.Pane eventKey="budget">
                <PortfolioAndroidBudgetApp />
              </Tab.Pane>
              <Tab.Pane eventKey="car">
                <PortfolioCarInsuranceWebApp />
              </Tab.Pane>
              <Tab.Pane eventKey="review">
                <PortfolioMobileReviewWebApp />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
}

export default PortfolioJS;