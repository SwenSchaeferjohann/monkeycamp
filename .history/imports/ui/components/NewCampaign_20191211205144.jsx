import React, { Component, createElement} from 'react';

import { ButtonToolbar, Button } from 'react-bootstrap'


class  extends Component {
  constructor(props) {
    super(props);
    this.state = { newCampaign: false }
  }
  render() { 
    return (
      <div>
      <ButtonToolbar>
       <Button onClick= {this.handleButtonClick.bind(this)}variant="outline-primary">add new campaign</Button>
      </ButtonToolbar>
    </div>

      );
  }
}
 
export default ;
function NewCampaign(){

  return(
  
  )
  }
  
  
  export default NewCampaign;
  