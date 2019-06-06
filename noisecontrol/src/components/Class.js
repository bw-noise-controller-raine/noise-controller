import React from 'react'
import { Link } from 'react-router-dom'

const Class = props => {
  return (
    <div>
      <li>{props.Class.name}</li>
      <Link to='updating'><button>Update</button></Link>
    </div>
  )
}

export default Class;