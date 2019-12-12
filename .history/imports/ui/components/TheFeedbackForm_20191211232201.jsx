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
      <div className="feedback-card">
        <Card style={{ width: '18rem' }}>
        
        <Card.Body>
          <Card.Title>
            <Form.Label> 
              <div>
                Did you meet us at Disrupt 2019?
              </div>
            </Form.Label>
          </Card.Title>
          <Card.Text>
            
          </Card.Text>
          <Row>
            <div>
              <Button variant="primary">Yes </Button>
              <Button variant="primary">Nope</Button>
            </div>
          </Row>
        </Card.Body>
        </Card>

      </div>
     );
  }
}
 
export default TheFeedBackForm;
