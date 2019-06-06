import React from 'react';
import axios from 'axios';



class updateClass extends React.Component {
  constructor() {
    super();
    this.state = {
      classes: [],
      activeClass: null
    }
  }

  updateClass = updatedClass => {
    axios
      .put(`https://noise-controller.herokuapp.com/api/classrooms/${updatedClass.id}`, updatedClass)
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

  render() {
    return (

      <div className='udpate'>
        <h2>Update A Class</h2>
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
            placeHolder='Highest Score'
            value={this.state.score}
            name='highestScore'
          />
          <button type='submit'>Add A Class</button>

        </form>

      </div>


    )
  }
}


export default updateClass;