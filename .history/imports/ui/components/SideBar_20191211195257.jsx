import React, { createElement} from 'react';

import Tabs from 'react-bootstrap/Tabs';

function NavBarTop (){
return(
  <div>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Monkeycamp</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Nav.Link id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Settings</Nav.Link>
        </Nav>
        
      </Nav.Link>
    </Navbar>
  </div>
)
}


export default NavBarTop;
