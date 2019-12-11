
import React, { createElement} from 'react';

import { Card, Accordion, Button, useAccordionToggle } from 'react-bootstrap';


function Accordian() { 
const decoratedOnClick = useAccordionToggle(eventKey, onClick);
return(
<Card.Header>
  <Card></Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Click me!
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>Hello! I'm the body</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
        Click me!
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>Hello! I'm another body</Card.Body>
    </Accordion.Collapse>
  </Card>
</Card.Header>
)
};

export default Accordian;