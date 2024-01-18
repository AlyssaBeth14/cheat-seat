import React from 'react'

const GroupHeader = () => {

  return (
    <tr className='header'>
        <th>#</th>
        <th>Name</th>
        <th>Level</th>
        <th style={{width: '25vw'}}>Notes</th>
        <th></th>
    </tr>
  )
}

export default GroupHeader