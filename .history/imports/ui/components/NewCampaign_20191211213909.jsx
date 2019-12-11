import React, { Component, createElement} from 'react';
 
import CampaignHeader from './CampaignHeader'
import { ButtonToolbar, Button } from 'react-bootstrap'


class NewCampaign extends Component {
  constructor(props) {
    super(props);
    this.state = { newCampaign: false }
  }

  handleButtonClick(){this.setState({newCampaign: true})}
  render() { 
  
  console.log(this.state.newCampaign)
  
    return (
      <div>
        
      <ButtonToolbar>
       <Button onClick= {this.handleButtonClick.bind(this)}variant="outline-primary">+ new campaign</Button>
      </ButtonToolbar>
      { this.state.newCampaign ? <CampaignHeader/>:''}
    </div>

      );
  }
}
 
export default NewCampaign;

  