import React from 'react';

const Classes = props => {
  console.log(props);
  return (
    <ul>
      {props.Classes.map(Class => {
        return <Class key={Class.id} Class={Class} />
      })}
    </ul>
  )
}

export default Classes;