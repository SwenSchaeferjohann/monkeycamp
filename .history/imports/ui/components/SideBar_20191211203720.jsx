import React, { createElement} from 'react';
import NewCampaign from './Accordian'
import { Tabs, Tab, Nav, Row, Col } from 'react-bootstrap';

function SideBar (){
return(
<Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first">Tab 1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">Tab 2</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
          <NewCampaign/>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
          Welcome Screen 2
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
)
}

export default SideBar;
