import react from 'react';

import axios from 'axios';

import { resolveWithPrefix } from 'jest-config/build/utils';

class ClassForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: props.cohort,
      NewCohort: {
        classroom_name: '',
        score: '',
        highest_score: '',
      }
    }
  }


  addClass = (event) => {
    event.prevetntDefault();
    axios
      .post('https://noise-controller.herokuapp.com/api', {
        classroom_name: '',
        score: '',
        highest_score: ''
      })
      .then(res => {
        this.setState({
          classes: resolveWithPrefix.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  inputHandler = event => {
    this.setState({ [event.target.classroom_name]: event.target.value })
  }

  changeHandler = event => {
    this.setState({
      group: {
        [event.target.name]: event.target.value
      }
    })
  }

  submitHandler = event => {
    this.props.addGroup(event, this.state.group);
  }

  render() {
    return (
      <div>
        <form id='form' onSubmit={this.submitHandler}>
          <input
            onChange={this.changeHandler}
            type='text' id='name'
            placeholder='Instructor'
            name='name'
            value={this.state.class.name}
          />

          <input type='text' placeholder="whateveryou want" />

          <input
            onChange={this.changeHandler}
            type='text' id='number'
            placeholder='Students'
            name='number'
            value={this.state.class.number}
          />

          <button onChange={this.changeHandler} type='submit'>New Cohort</button>
        </form>
      </div>
    )
  }
}

export default ClassForm;
