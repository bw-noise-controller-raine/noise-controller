import React from 'react';
import axios from "axios";
import './App.css';
// import { get } from 'https';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      classes: [],
      Class: {
        classroom_name: '',
        score: 0,
        highest_score: 0
      }
    }
  }


  componentDidMount() {
    axios
      .get('https://noise-controller.herokuapp.com/api/auth')
      .then(res => this.setState({ class: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">

        <Route path='/' />

      </div>
    );
  }
}

export default App;
