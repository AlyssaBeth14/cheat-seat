import React from 'react'
import Button from 'react-bootstrap/Button'

const AddStudent = (props) => {

const {addStudent} = props

  return (
      <div>
        <Button onClick={addStudent} variant='light'>Add Student</Button>
     </div>
  )
}

export default AddStudent