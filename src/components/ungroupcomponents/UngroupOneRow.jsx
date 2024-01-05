import React from 'react'
import {useState, useEffect} from 'react'
import StudentId from '../mastercomponents/StudentId.jsx'
import StudentName from '../mastercomponents/StudentName.jsx'
import Include from './Include.jsx'
import axios from 'axios'

const UngroupOneRow = (props) => {
    const {initialStudentData, initialEditMode, currentData, setCurrentData} = props
    initialStudentData.Ungroups = initialStudentData.Ungroups.sort((a,b) => a.ungroupId - b.ungroupId)
    const [editMode, setIsEditing] = useState(initialEditMode)
    const [includedOne, setIncludedOne] = useState(initialStudentData.Ungroups[0].StudentUngroup.included)
    const {studentId, studentName} = initialStudentData
    
    const changeEditMode = () => setIsEditing(true)
    const changeNormalMode = () => {
      const bodyObj ={
        studentId,
        studentName,
        includedOne
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

    useEffect(() => {
      changeNormalMode()
    }, [includedOne])
    
      return (
        <tr>
          <StudentId
          studentId={props.rowNum}
          />
          <StudentName
          value={studentName}
          />
          <Include
          isEditing={editMode}
          value={includedOne}
          onIncludeChange={setIncludedOne}
          changeNormalMode={changeNormalMode}
          />
        </tr>
      )
    }

export default UngroupOneRow