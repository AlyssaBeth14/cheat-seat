import React from 'react'

const StudentName = (props) => {

    const {isEditing, value, onNameChange} = props

  return isEditing ? (
    <td>
    <input type='text'
    value={value}
    onChange={(e) => onNameChange(e.target.value)}
    />
    </td>
  ) : (
    <td>
     {value}
    </td>
  )
}

export default StudentName