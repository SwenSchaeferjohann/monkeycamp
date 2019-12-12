import React, { createElement, Component } from "react";

import { Form, Button } from "react-bootstrap";
import TheFeedBackForm from './TheFeedbackForm'
class FormBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
        question: 'Did you see us on billboard?',
        thankYouMessage: 'Thank you for your input. We highly appreciate it.',
    };
    this.handleQuestionChange.bind(this);
    this.handleThankYouMessageChange.bind(this);
  }

  handleQuestionChange = (event) => {
      this.setState({ question: event.target.value })
  }

  handleThankYouMessageChange = (event) => {
      this.setState({ thankYouMessage: event.target.value })
  }

  render() {
    return (


      <div className="form-builder-wrapper">

      <Form>

        <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>What would you like to ask the user?</Form.Label>
            <Form.Control 
                as="textarea" 
                rows="3"
                onChange={this.handleQuestionChange}
                value="Did you see us at Disrupt 2019?"
                // defaultValue={this.state.question}
                />
        </Form.Group>

        <Form.Group>
          <Form.Label>Choices for Users</Form.Label>
          <div className="yes-no-buttons">
            <Button variant="outline-dark">Yes</Button>
            <Button variant="outline-dark">Nope</Button>
          </div>
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Thank you message for user</Form.Label>
            <Form.Control 
                as="textarea" 
                rows="3"
                onChange={this.handleThankYouMessageChange}
                value={this.state.thankYouMessage}

                />
        </Form.Group>

        <Form.Row>
          <Form.Label className="marginRight">Place it on :</Form.Label>
          <Form.Check
            className="marginRight"
            type="radio"
            label="left"
            name="formHorizontalRadios"
            id="formHorizontalRadios1"
            />
          <Form.Check
            type="radio"
            label="right"
            name="formHorizontalRadios"
            id="formHorizontalRadios2"
            />
        </Form.Row>

      </Form>
        
      <div className="form-preview">  
        <TheFeedBackForm thankYouMessage={this.state.thankYouMessage} question={this.state.question}/>
       </div>


    </div>




    );
  }
}

export default FormBuilder;