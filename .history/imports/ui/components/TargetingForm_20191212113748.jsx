import React, { createElement} from 'react';
import { Form, Col } from 'react-bootstrap';

function TargetingForm (){
return(
<Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Appear on Page (url)</Form.Label>
      <Form.Control placeholder="techcrunch.com/users" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Triggered by</Form.Label>
      <Form.Control type="text" placeholder="Sign Up" />
    </Form.Group>
  </Form.Row>
</Form>
)
}

export default TargetingForm;
