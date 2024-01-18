import React from 'react'
import {useState, useEffect} from 'react'
import StudentId from '../mastercomponents/StudentId.jsx'
import StudentName from '../mastercomponents/StudentName.jsx'
import Include from './Include.jsx'
import axios from 'axios'

const UngroupTwoRow = (props) => {
    const {initialStudentData, initialEditMode, currentData, setCurrentData} = props
    initialStudentData.Ungroups = initialStudentData.Ungroups.sort((a,b) => a.ungroupId - b.ungroupId)
    const [editMode, setIsEditing] = useState(initialEditMode)
    const [includedTwo, setIncludedTwo] = useState(initialStudentData.Ungroups[1].StudentUngroup.included)
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

    useEffect(() => {
      changeNormalMode()
    }, [includedTwo])
    
      return (
        <tr>
          <td>
          <StudentId
          studentId={props.rowNum}
          />
          </td>
          <td>
          <StudentName
          value={studentName}
          />
          </td>
          <td>
          <Include
           isEditing={editMode}
           value={includedTwo}
           onIncludeChange={setIncludedTwo}
           changeNormalMode={changeNormalMode}
          />
          </td>
        </tr>
      )
    }

export default UngroupTwoRow