import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { login } from '../actions';

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
      this.props.history.push('/Aquarium');
    })
  };


  registerHandler = () => {
    this.props.history.push('/register')
  }

  render() {
    return (
      <form onSubmit={this.login}>
        <input
          type='text'
          name='username'
          value={this.state.credentials.username}
          onChange={this.changeHandler}
        />

        <input
          type='password'
          name='password'
          value={this.state.credentials.password}
          onChange={this.changeHandler}
        />
        <button>
          {this.props.isLoggedIn ? (
            <Loader type='ThreeDots' color='mediumpurple' height='10' width='20' />
          ) : (
              'Log In'
            )}
        </button>
      </form>
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