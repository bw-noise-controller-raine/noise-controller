import React from 'react';
import axios from "axios";
import Login from './authorization/Login';
import { Route } from 'react-router-dom';
import Register from './components/register'
import mainpage from './components/aquarium';
import Header from './components/header';
import UpdateClass from './components/updating';
import AddClass from './components/addclass';
import Classes from './components/Classes';
import { NavLink } from 'react-router-dom';
import PrivateRoute from './authorization/PrivateRoute';

import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      classes: [],
      activeClass: null
    }

  }


  updateClass = updatedClass => {
    axios
      .put(`https://noise-controller.herokuapp.com/api/classrooms/:id`, updatedClass)
      .then(res => {
        this.render.setState({ classes: res.data });
        this.props.history.push('/classes');
      })
      .catch(error => console.log(error))
  };

  setUpdateForm = Class => {
    this.setState({ activeClass: Class });
    this.props.history.push('/updating')
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value })
  };

  componentDidMount() {
    axios
      .get('https://noise-controller.herokuapp.com/api/auth')
      .then(res => this.setState({ class: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path='/' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/mainpage' component={mainpage} />
        <Route path='updating' render={props => (
          <UpdateClass{...props}
            updateClass={this.updateClass}
            activeClass={this.state.activeClass}
          />
        )}
        />
        <PrivateRoute path='/addClass' component={AddClass} />

        <PrivateRoute path='/classes' component={Classes} />
      </div>
    );
  }
}

export default App;
