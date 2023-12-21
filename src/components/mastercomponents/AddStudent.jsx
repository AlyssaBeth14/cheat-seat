import React from 'react'

const AddStudent = (props) => {

const {addStudent} = props

  return (
    <tr>
      <td>
        <button onClick={addStudent}>Add Student</button>
      </td>
    </tr>
  )
}

export default AddStudent