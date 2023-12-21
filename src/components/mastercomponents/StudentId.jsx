import React from 'react'

const StudentId = (props) => {

    const {isEditing, value, onIdChange} = props

  return isEditing ? (
    <td>
    <input type='text'
    value={value}
    onChange={(e) => onIdChange(e.target.value)}
    />
    </td>
  ) : (
    <td>
    {value}
    </td>
  )
}

export default StudentId