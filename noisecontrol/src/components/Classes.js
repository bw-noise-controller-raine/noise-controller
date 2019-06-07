import React from 'react';
// import Classroom from './Class'
// import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { getlists } from '../actions';
import { connect } from 'react-redux';



class Classes extends React.Component {


  componentDidMount() {
    this.props.getlists()
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

export default connect(
  mapStateToProps,
  { getlists })
  (Classes)



