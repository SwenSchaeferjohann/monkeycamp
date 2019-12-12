
import React, { createElement} from 'react';

import { Card, Accordion, Button, useAccordionToggle } from 'react-bootstrap';

import FormBuilder from './FormBuilder';

import ChannelForm from './ChannelForm'
import TargetingForm from './TargetingForm';
function Accordian() { 
return(
<Accordion>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Channel
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
        <ChannelForm/>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
        Create Feedback form
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
        <div className="form-builder-wrapper">
          <FormBuilder className="form-builder"/>
          <div className="form-preview"></div>
        </div>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="2">
        Targeting
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="2">
      <Card.Body>
        <TargetingForm />
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  
</Accordion>
)
};

export default Accordian;