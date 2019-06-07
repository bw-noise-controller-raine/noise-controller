import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../actions';
import { withRouter } from "react-router";


class Register extends Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  }

  changeHandler = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    })
  }

  newregister = e => {
    e.preventDefault();
    if (!this.state.credentials.username || !this.state.credentials.password) {
      alert('Please Enter Correct UserName and Password')
      return null;
    } else {
      this.props.register(this.state.credentials)
        .then(() => this.props.history.push('/'))
      this.setState({
        username: '',
        password: '',
      })
    }
  }


  render() {
    return (
      <div className='registerContent'>
        <div className='registerContainer'>
        <h1>Register Here</h1>
        <form onSubmit={this.newregister}>
          <input
            className='registerInput'
            type='text'
            name='username'
            value={this.state.credentials.username}
            onChange={this.changeHandler}
            placeholder='UserName'
          />
          <input
            className='registerInput'
            type='password'
            name='password'
            value={this.state.credentials.password}
            onChange={this.changeHandler}
            placeholder='Password'
          />
          <input
            className='registerInput'
            type='text'
            name='classname'
            onChange={this.changeHandler}
            placeholder='Class Name'
          />
          <button type='submit'>Sign Up</button>
        </form>
      </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    error: state.error,
    addingUser: state.addingUser
  }
}
export default withRouter(connect(mapStateToProps,
  { register })(Register));