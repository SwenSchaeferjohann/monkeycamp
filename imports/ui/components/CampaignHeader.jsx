import React, { createElement } from 'react'
import { Card} from 'react-bootstrap'

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
           
           
           <Button variant="primary">Go somewhere</Button>

          </Card.Body>
        </Card>

      </div>
     );
  }
}
 
export default CampaignHeader;