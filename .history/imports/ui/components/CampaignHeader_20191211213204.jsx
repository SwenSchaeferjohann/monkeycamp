import React, { Component, createElement } from 'react'
import { Card, Button, Form, FormControl } from 'react-bootstrap'

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
           <col>
           <Form.Control type="text" placeholder="Normal text" />
           </col>
           <col>
           <Button variant="primary">+ add channel</Button>
           </col>
          </Card.Body>
        </Card>

      </div>
     );
  }
}
 
export default CampaignHeader;