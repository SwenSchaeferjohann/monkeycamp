import React, { Component, createElement} from 'react';
import { Row, Col, Form, Card, Button} from 'react-bootstrap';
 
// import CampaignHeader from './CampaignHeader'
// import { ButtonToolbar, Button } from 'react-bootstrap'
class TheFeedBackForm extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div>
        <Card style={{ width: '18rem' }}>
        
        <Card.Body>
          <Card.Title>
            <Form.Label> Did you meet us at Disrupt 2019?</Form.Label>
          </Card.Title>
          <Card.Text>
            
          </Card.Text>
          <Row>

          <Button variant="primary">Go somewhere</Button>
          <Button variant="primary">Go somewhere</Button>
          </Row>
        </Card.Body>
        </Card>

      </div>
     );
  }
}
 
export default TheFeedBackForm;
