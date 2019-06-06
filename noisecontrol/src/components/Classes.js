import React from 'react';
import Class from './Class'
import axios from 'axios';
import { NavLink } from 'react-router-dom';




class Classes extends React.Component {
  constructor() {
    super();
    this.state = {
      classes: [],
    }
  }

  componentDidMount() {
    axios
      .get('https://noise-controller.herokuapp.com/api/classrooms')
      .then(res => {
        this.setState({ classes: res.data });
        console.log("res", res);
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <NavLink to='/mainpage'><button>Aquarium</button></NavLink>
        <ul>
          {
            this.state.classes.map(Class => {
              return <Class key={Class.id} Class={Class} />
            })
          }
        </ul>
      </div>
    )
  }
}





export default Classes;