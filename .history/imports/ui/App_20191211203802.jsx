import React, { createElement} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import NavBarTop from './components/NavBarTop';
import SideBar from './components/SideBar';
import Accordian from './components/Accordian';



const App = () => (
  <div>
    <NavBarTop/>
    <SideBar />
    <Accordian />>
  </div>
);

export default App;
