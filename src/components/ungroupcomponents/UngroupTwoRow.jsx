import React from 'react'
import {useState} from 'react'
import StudentId from '../mastercomponents/StudentId.jsx'
import StudentName from '../mastercomponents/StudentName.jsx'
import Include from './Include.jsx'
import axios from 'axios'

const UngroupTwoRow = (props) => {
    const {initialStudentData, initialEditMode, currentData, setCurrentData} = props
    const [editMode, setIsEditing] = useState(initialEditMode)
    const [includedTwo, setIncludedTwo] = useState(initialStudentData.Ungroups[2].StudentUngroup.included)
    const {studentId, studentName} = initialStudentData
    
    const changeEditMode = () => setIsEditing(true)
    const changeNormalMode = () => {
      const bodyObj ={
        studentId,
        studentName,
        includedTwo
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
          onIncludeChange={setIncludedTwo}
          />
        </tr>
      )
    }

export default UngroupTwoRow