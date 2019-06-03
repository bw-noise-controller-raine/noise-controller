import react from 'react';

import axios from 'axios';
import { ReactComponent } from '*.svg';

class ClassForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cohort: props.cohort,
      NewCohort: {
        name: '',
        number: ''
      }
    }
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

export default form;