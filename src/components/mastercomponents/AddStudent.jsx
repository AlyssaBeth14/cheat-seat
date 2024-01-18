import React from 'react'
import Button from 'react-bootstrap/Button'

const AddStudent = (props) => {

const {addStudent} = props

  return (
      <div style={{ textAlign: 'center', marginBottom: '10px'}}>
        <Button onClick={addStudent} variant='light' style={{fontWeight: '750'}}>Add Student</Button>
     </div>
  )
}

export default AddStudent