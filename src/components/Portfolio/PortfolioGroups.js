import React from 'react';
import PortfolioReact from '';
import PortfolioJS from '';
import PortfolioHTML from '';
import PortfolioNET from '';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

function PortfolioGroups() {
  return (
    <>
      <Tabs defaultActiveKey="html" className="PortfolioTabs">
        <Tab eventKey="html" title="HTML">
          <br />
          <PortfolioHTML />
        </Tab>
        <Tab eventKey="javascript" title="JS">
          <br />
          <PortfolioJS />
        </Tab>
        <Tab eventKey="react" title="React">
          <br />
          <PortfolioReact />
        </Tab>
        <Tab eventKey="net" title=".NET">
          <br />
          <PortfolioNET />
        </Tab>
      </Tabs>
    </>
  );
}

export default PortfolioGroups;