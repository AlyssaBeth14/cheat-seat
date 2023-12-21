import React from 'react'

const MasterListHeader = (props) => {

  const {groupName} = props

  return (
    <tr>
        <th>#</th>
        <th>Name</th>
        <th>"Group Name"</th>
        <th></th>
    </tr>
 
  )
}

export default MasterListHeader