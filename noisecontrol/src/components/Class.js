import React from 'react'
import { Link } from 'react-router-dom'

const Classroom = props => {
  return (
    <div>
      <ul>
        <li>{props.Classroom.classroom_name}</li>
      </ul>
      <Link to='updating'><button>Update</button></Link>
    </div>
  )
}

export default Classroom;