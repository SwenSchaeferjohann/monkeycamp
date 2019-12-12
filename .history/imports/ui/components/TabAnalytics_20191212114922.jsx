import React, { createElement} from 'react';
import { Table, Dropdown } from 'react-bootstrap';

function AnalyticsContent (){
return(
<div>
<Dropdown onSelect={function(eventKey, event){
    console.log(eventKey, event);
    value = this.event.innerText;
    }}>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    TechCrunch 2019
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Billboard at TechCrunch </Dropdown.Item>
    <Dropdown.Item href="#/action-2">Radio (Kreuzberg)</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Newspaper</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>    
<Table responsive>
  <thead>
    <tr>
      <th>Channel</th>
      <th>Impact</th>
      <th>Reach</th>
      <th>Performance</th>
      <th>Contribution to overall growth</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td> Conference Booths</td>
      <td>100</td>
      <td>300</td>
      <td>33.33%</td>
      <td>20%</td>
    </tr>
  </tbody>
</Table>
</div>
)
}

export default AnalyticsContent;



