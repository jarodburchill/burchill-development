import React from 'react';
import PortfolioReact from './PortfolioReact';
import PortfolioJS from './PortfolioJS';
import PortfolioHTML from './PortfolioHTML';
import PortfolioNET from './PortfolioNET';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

function PortfolioGroups() {
  return (
    <>
      <Tabs defaultActiveKey="react" className="PortfolioTabs">
        <Tab eventKey="react" title="React">
          <br />
          <PortfolioReact />
        </Tab>
        <Tab eventKey="javascript" title="JS">
          <br />
          <PortfolioJS />
        </Tab>
        <Tab eventKey="html" title="HTML">
          <br />
          <PortfolioHTML />
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