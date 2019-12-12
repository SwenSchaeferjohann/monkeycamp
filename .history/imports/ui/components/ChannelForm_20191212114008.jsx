
import React, { createElement} from 'react';

import { Form, Dropdown, DropdownButton, Col } from 'react-bootstrap';


function ChannelForm() { 
//   const [validated, setValidated] = useState(false);

  const handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

return(
<Form onSubmit={handleSubmit}>
    <Form.Row>
        <Form.Group as={Col} md="3" controlId="validationCustom03">
          <Form.Label>Type</Form.Label>
          <DropdownButton id="dropdown-basic-button" title="Conference Booths">
            <Dropdown.Item href="#/action-1">Billboard</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Radio</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Newspaper</Dropdown.Item>
          </DropdownButton>
        </Form.Group>
        <Form.Group as={Col} style={{marginleft: 60}} md="3" controlId="validationCustom04">
          <Form.Label>Where</Form.Label>
          <Form.Control type="text" placeholder="City" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>When</Form.Label>
          <Form.Control type="text" placeholder="Date" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
    </Form.Row>
</Form>
)
};

export default ChannelForm;