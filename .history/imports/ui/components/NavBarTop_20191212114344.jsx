import React, { createElement} from 'react';

import { Navbar, Nav, Form, NavDropdown, FormControl, Button } from 'react-bootstrap'

function NavBarTop (){
return(
  <div>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Monkeycamp</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Nav.Link id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="blub" ref="#home">Settings</Nav.Link>
        </Nav>
        
      </Nav.Link>
    </Navbar>
  </div>
)
}


export default NavBarTop;
