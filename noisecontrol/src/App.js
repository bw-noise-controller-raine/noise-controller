import React from 'react';
import axios from "axios";
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cohort: [],
      classRoom: {
        name: '',
        number: ''
      }
    }
  }


  render() {
    return (
      <div className="App">
        <h1>welcome to Build weeks</h1>
      </div>
    );
  }
}

export default App;
