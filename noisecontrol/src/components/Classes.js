import React from 'react';
// import Classroom from './Class'
// import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { getlists } from '../actions';
import { connect } from 'react-redux';
import { withRouter } from "react-router";


class Classes extends React.Component {


  componentDidMount() {
    this.props.getlists()
    console.log(this.props.classes)
  }

  render() {
    return (
      <div className='classesContainer'>
        <NavLink to='/mainpage'><button>Aquarium</button></NavLink>
        <div className='classlist' >
        <ul>
          {
            this.props.classes.map(Classroom => {
              console.log(Classroom, 'hello')
              return (
                <li key={Classroom.id}> {Classroom.classroom_name}</li>
                // <Classroom key={Classroom.id} Classroom={Classroom} />  
              )
            })
          }
        </ul>
      </div>
      </div>
    )
  }
}



const mapStateToProps = state => {
  return {
    classes: state.classes
  }
}

export default withRouter (connect(
  mapStateToProps,
  { getlists })
  (Classes))



