import React from 'react';
import { NavLink } from 'react-router-dom';

const mainpage = () => {
  return (
    <div>

      <div className='links mainPage'>

        <NavLink to='classes'><button>My Classes</button></NavLink>
        <NavLink to='addClass'><button>Add A Class</button></NavLink>
      </div>

      <h1>Hello</h1>
    </div>
  )
}


export default mainpage;