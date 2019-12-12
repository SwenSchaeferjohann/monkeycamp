import React, { Component, createElement} from 'react';
import { Spinner, Row, Col, Form, Card, Button} from 'react-bootstrap';
 
// import CampaignHeader from './CampaignHeader'
// import { ButtonToolbar, Button } from 'react-bootstrap'
class TheFeedBackForm extends Component {
  constructor(props) {
    super(props);
    this.state = {  tab: 1, selfDestroy: false}
  }


  handleClick(){
    this.setState({tab:2});
    
    this.setState({selfDestroy: true})


  }
  render() {  
    return ( 
      
      <div >

        {this.state.selfDestroy == false? 


          <div>
              {this.state.tab === 1 ?
              <Card className="feedback-card" style={{ width: '18rem' }}>
                <Button variant="danger" className="boxclose"> </Button>
                
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
                      <Button onClick={setTimeout(this.handleClick.bind(this), 2000)} className="yes-btn" variant="warning">Yes </Button>
                      <Button className="no-btn" variant="warning">Nope</Button>
                    </div>
                  </Row>
                </Card.Body>
              </Card>

              :

              
              <Card className="feedback-card" style={{ width: '18rem' }}>
              {/* <Button variant="danger" className="boxclose"> </Button> */}
              
                <Card.Body>
                  <Card.Title>
                


                    <Form.Label className="feedback-label-2"> 
                      <div>

                        Thank you!
                      </div>
                    </Form.Label>
                  </Card.Title>
                  <Card.Text>
                    
                  </Card.Text>
                  <Row>
                    <div className ="yes-no-wrapper">
                      <Spinner variant="warning" animation="grow" />
                      {/* <Button onClick={this.handleClick.bind(this)} className="yes-btn" variant="warning">Yes </Button>
                      <Button className="no-btn" variant="warning">Nope</Button> */}
                    </div>
                  </Row>
                </Card.Body>
              </Card>
          }
          </div>


          :''
        }

      </div>
     );
  }
}
 
export default TheFeedBackForm;
