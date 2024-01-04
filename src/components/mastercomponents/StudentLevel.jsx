import React from 'react'

const StudentLevel = (props) => {
    const {isEditing, value, onLevelChange} = props
  return isEditing ? (
    <td>
    <select value={value} onChange={(e) => onLevelChange(+e.target.value)}>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
    </select>
    </td>
  ) : (
    <td>
    {value}
    </td>
  )
}

export default StudentLevel