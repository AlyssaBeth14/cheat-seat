import React from 'react'

const StudentId = (props) => {

    const {isEditing, value, onIdChange} = props

  return isEditing ? (
    <>
    <input type='text'
    value={value}
    onChange={(e) => onIdChange(e.target.value)}
    />
    </>
  ) : (
    <>
    {value}
    </>
  )
}

export default StudentId