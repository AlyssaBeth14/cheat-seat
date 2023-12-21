import React from 'react'

const StudentName = (props) => {

    const {isEditing, value, onNameChange} = props

  return isEditing ? (
    <>
    <input type='text'
    value={value}
    onChange={(e) => onNameChange(e.target.value)}
    />
    </>
  ) : (
    <>
     {value}
    </>
  )
}

export default StudentName