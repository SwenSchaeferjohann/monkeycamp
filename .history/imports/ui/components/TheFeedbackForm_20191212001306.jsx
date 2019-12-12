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
      <div >
        <Card className="feedback-card" style={{ width: '18rem' }}>
        <Button className="box-close">x</Button>
        
        <Card.Body>
          <Card.Title>
         


            <Form.Label className="feedback-label"> 
              <div>

                Did you meet us at Disrupt 2019?
              </div>
            </Form.Label>
          </Card.Title>
          <Card.Text>
            
          </Card.Text>
          <Row>
            <div className ="yes-no-wrapper">
              <Button className="yes-btn" variant="warning">Yes </Button>
              <Button className="no-btn" variant="warning">Nope</Button>
            </div>
          </Row>
        </Card.Body>
        </Card>

      </div>
     );
  }
}
 
export default TheFeedBackForm;
