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

            <Form>
              <Form.Row>
                <Col>
                  <Form.Control placeholder="Campaign name" />
                </Col>
                <Col>
                  <Button onClick={this.handleButtonClick.bind(this)}variant="primary">+ add channel</Button>
                
                </Col>
              </Form.Row>
            </Form>
           
           
          </Card.Body>
        </Card>

      </div>
     );
  }
}
 
export default CampaignHeader;