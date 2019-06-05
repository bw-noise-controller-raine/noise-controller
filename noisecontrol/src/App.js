import React from 'react';
import axios from "axios";
import Login from './authorization/Login'
import { Route } from 'react-router-dom';
import Register from './components/register'
import mainpage from './components/Aquarium'

import './App.css';


class App extends React.Component {



  componentDidMount() {
    axios
      .get('https://noise-controller.herokuapp.com/api/auth')
      .then(res => this.setState({ class: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <Route exact path='/' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/auarium' component={mainpage} />
      </div>
    );
  }
}

export default App;
