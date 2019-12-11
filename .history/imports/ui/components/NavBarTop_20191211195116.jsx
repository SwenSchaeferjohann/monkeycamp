import React, { createElement} from 'react';

import { Navbar, Nav, Form, NavDropdown, FormControl, Button } from 'react-bootstrap'

function NavBarTop (){
return(
  <div>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Settings</Nav.Link>
          
         
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  </div>
)
}


export default NavBarTop;
