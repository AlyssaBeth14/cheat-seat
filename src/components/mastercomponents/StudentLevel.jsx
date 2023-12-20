import React from 'react'

const StudentLevel = (props) => {
    const {isEditing, value, onLevelChange} = props
  return isEditing ? (
    <>
    <select value={value} onChange={(e) => onLevelChange(e.target.value)}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
    </select>
    </>
  ) : (
    {value}
  )
}

export default StudentLevel