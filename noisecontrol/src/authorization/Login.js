import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { login } from '../actions';
// import { Link } from 'react-router-dom';

class classLogin extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };
  changeHandler = event => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [event.target.name]: event.target.value
      }
    })
  };

  login = event => {
    event.preventDefault();
    this.props.login(this.state.credentials).then(() => {
      this.props.history.push('/mainpage');
    })
  };


  registerHandler = () => {
    this.props.history.push('/register')
  }

  render() {
    return (
      <div className="container">
        <div className='Form'>
          <form onSubmit={this.login}>
            <input className='formInput'
              type='text'
              name='username'
              placeholder="Name"
              value={this.state.credentials.username}
              onChange={this.changeHandler}
            />
            <br />
            <input className='formInput'
              type='password'
              name='password'
              placeholder="Password"
              value={this.state.credentials.password}
              onChange={this.changeHandler}
            />

            <br />

            <button className='logButton' type='submit'>
              {this.props.isLoggedIn ? (
                <Loader type='ThreeDots' color='mediumpurple' height='10' width='20' />
              ) : (
                  'Log In'
                )}
            </button >
            <button className='logButton' onClick={this.registerHandler}>Register</button>

          </form>

        </div>
      </div>
    )
  }

}


const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn
});

export default connect(
  mapStateToProps,
  { login }
)(classLogin)