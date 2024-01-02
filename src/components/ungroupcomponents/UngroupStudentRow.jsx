import React from 'react'
import {useState} from 'react'
import StudentId from '../mastercomponents/StudentId'
import StudentName from '../mastercomponents/StudentName'
import Include from './Include'
import axios from 'axios'

const UngroupStudentRow = (props) => {
const {initialStudentData, initialEditMode, currentData, setCurrentData} = props
const [editMode, setIsEditing] = useState(initialEditMode)
const [included, setIncluded] = useState(initialStudentData.included)
const {studentId, studentName} = initialStudentData

const changeEditMode = () => setIsEditing(true)
const changeNormalMode = () => {
  const bodyObj ={
    studentId,
    studentName,
    included
  }
  axios.put(`/student/${initialStudentData.studentId}`, bodyObj)
  .then((res) => {
    setCurrentData(res.data)
    setIsEditing(false)
  })
  .catch((err) => {
    console.log(err);
  })
}

  return (
    <tr>
      <StudentId
      studentId={props.rowNum}
      />
      <StudentName
      value={studentName}
      />
      <Include
      onIncludeChange={setIncluded}
      />
    </tr>
  )
}

export default UngroupStudentRow