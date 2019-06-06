import React from 'react';
import { NavLink } from 'react-router-dom';

const mainpage = () => {
  return (
    <div className='mainPage'>
      <div className='links'>

        <NavLink to='classes'><button className='classButtons'>My Classes</button></NavLink>
        <NavLink to='addClass'><button className='classButtons'>Add A Class</button></NavLink>
        <NavLink to='/updating'><button className='classButtons'>Edit Class</button></NavLink>
      </div>
    </div>
  )
}


export default mainpage;