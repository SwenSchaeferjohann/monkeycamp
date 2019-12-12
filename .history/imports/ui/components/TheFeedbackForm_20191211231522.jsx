import React, { Component, createElement} from 'react';
import { Col, Form, Card, Button} from 'react-bootstrap';
 
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
            <Form.Label> Did you see one of our billboards lately?</Form.Label>
          </Card.Title>
          <Card.Text>
            
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>

      </div>
     );
  }
}
 
export default TheFeedBackForm;
