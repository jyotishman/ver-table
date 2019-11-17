import React from 'react';
import './App.css';
import TableApp from "./TableApp";

class App extends React.Component {
  constructor(props) {
    super(props);
  
    this.options = {
      colDefs : [{
        "label": "Text Columns",
        "width": "40 % ",
        "type": "text"
      },
      {
        "label": "Input Column",
        "width": "60 % ",
        "type": "input"
      },
      {
        "label": "Checkbox Column",
        "width": "30 px",
        "type": "checkbox"
      }],
      data: [{
        "id": "1a",
        "colData": ["Laxman", "Bangalore, India", true]
      },
      {
        "id": "2a",
        "colData": ["Ram", "Delhi, Malviya Nagar", false]
      }, {
        "id": "3a",
        "colData": ["Jyotishman", "Noida, Sector 27", true]
      }, {
        "id": "4a",
        "colData": ["Pankaj", "Gurgaon, India", false]
      }, {
        "id": "5a",
        "colData": ["Ashish", "UP, India", true]
      }, {
        "id": "6a",
        "colData": ["Pulkit", "Pune, India", true]
      }]
    }
  }
  update () {
    var index = prompt("Which row  you want to update", "");
    if(index)
      this.refs.child.update(index-1);
  }
  delete() {
    var index = prompt("Which row  you want to delete", "");
    if(index)
      this.refs.child.delete(index-1);
  }
  add() {
    this.refs.child.add(this.options.data);
  }
  render() {
  return (
    <div className="App">
      <div style={{ border: "1px solid #000", display: "block", margin: "auto", maxWidth: "500px"}}>
        <h3>Inside Table Component</h3>
        <TableApp options = {this.options}  ref="child"/>
      </div>

      <div className="btn-wrap">
        <p>Main App</p>
        <button onClick={()=> this.add()}>Add more</button>
        <button onClick={()=> this.delete()}>Delete</button>
        <button onClick={()=> this.update()}>Update</button>
      </div>
      
    </div>
  );
  }
}

export default App;
