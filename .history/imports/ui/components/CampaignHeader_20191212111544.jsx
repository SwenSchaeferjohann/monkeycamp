import React, { Component, createElement } from 'react'
import { Card, Col, Button, Form, FormControl } from 'react-bootstrap'


import Accordian from './Accordian';
class CampaignHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { channelAdded: false }
  }

  handleButtonClick(){this.setState({channelAdded: true})}
  render() { 
    return ( 
      <div>
        <div  className="card-header">

        <Card style=>
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

        <Card className="card">
          <Card.Body>

          {this.state.channelAdded ? <Accordian/>:''}
           
           
          </Card.Body>
        </Card>



      </div>
     );
  }
}
 
export default CampaignHeader;