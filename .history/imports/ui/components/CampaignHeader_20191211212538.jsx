import React, { Component, createElement } from 'react'
import { Card, Button } from 'react-bootstrap'

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
           
           
           <Button variant="primary">+ add channel</Button>

          </Card.Body>
        </Card>

      </div>
     );
  }
}
 
export default CampaignHeader;