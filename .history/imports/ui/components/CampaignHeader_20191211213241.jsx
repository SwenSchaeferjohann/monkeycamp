import React, { Component, createElement } from 'react'
import { Card, Col, Button, Form, FormControl } from 'react-bootstrap'

class CampaignHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div>
        <Card>
          <Card.Body>
           <Col>
           <Form.Control type="text" placeholder="Normal text" />
           </Col>
           <Col>
           <Button variant="primary">+ add channel</Button>
           </Col>
          </Card.Body>
        </Card>

      </div>
     );
  }
}
 
export default CampaignHeader;