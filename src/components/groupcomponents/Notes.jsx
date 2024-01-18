import React from 'react'

const Notes = (props) => {
  const {isEditing, value, onNotesChange} = props
  
  return isEditing ? (
    <td>
    <input type='text'
    style={{width: '25vw'}}
    value={value}
    onChange={(e) => onNotesChange(e.target.value)}
    />
    </td>
  ) : (
    <td>
      {value}
    </td>
  )
}

export default Notes