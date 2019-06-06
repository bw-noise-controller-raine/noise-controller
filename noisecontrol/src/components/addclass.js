import axios from 'axios';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class AddClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: props.classes,
      addClass: {
        name: '',
        classroomName: '',
        score: 0,
        highestScore: 0
      }
    }
  }

  addClass = (event) => {
    event.prevetDefault();
    axios
      .post('https://noise-controller.herokuapp.com/api/classrooms', {
        name: this.state.name,
        classroomName: this.state.classroomName,
        score: this.state.score,
        highestScore: this.state.highestScore
      })
      .then(res => {
        this.ListeningStateChangedEvent({
          classes: res.data
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value })
  };

  render() {
    return (
      <div className='addClass'>
        <h2>Add A Class</h2>
        <div className='formContainer'>
          <div className="classContainer">

            <form>
              <input
                type="text"
                onChange={this.changeHandler}
                placeholder='Name'
                value={this.state.name}
                name='name'
              />

              <input
                type="text"
                onChange={this.changeHandler}
                placeholder='ClassRoom Name'
                value={this.state.classroomName}
                name='classroomName'
              />

              <input
                type='text'
                onChange={this.changeHandler}
                placeholder='Score'
                value={this.state.score}
                name='score'
              />

              <input
                type="text"
                onChange={this.changeHandler}
                placeholder='Highest Score'
                value={this.state.score}
                name='highestScore'
              />
              <NavLink to='/classes'><button type='submit'>Add A Class</button></NavLink>
            </form>
          </div>
        </div>
      </div>

    )

  }
}

export default AddClass;