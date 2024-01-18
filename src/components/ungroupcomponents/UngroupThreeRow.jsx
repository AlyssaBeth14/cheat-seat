import React from 'react'
import {useState, useEffect} from 'react'
import StudentId from '../mastercomponents/StudentId.jsx'
import StudentName from '../mastercomponents/StudentName.jsx'
import Include from './Include.jsx'
import axios from 'axios'

const UngroupThreeRow = (props) => {
  const {initialStudentData, initialEditMode, currentData, setCurrentData} = props
  initialStudentData.Ungroups = initialStudentData.Ungroups.sort((a,b) => a.ungroupId - b.ungroupId)
  const [editMode, setIsEditing] = useState(initialEditMode)
  const [includedThree, setIncludedThree] = useState(initialStudentData.Ungroups[2].StudentUngroup.included)
  const {studentId, studentName} = initialStudentData
  
  const changeEditMode = () => setIsEditing(true)
  const changeNormalMode = () => {
    const bodyObj ={
      studentId,
      studentName,
      includedThree
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
  }, [includedThree])
  
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
         value={includedThree}
         onIncludeChange={setIncludedThree}
         changeNormalMode={changeNormalMode}
        />
        </td>
      </tr>
    )
  }

export default UngroupThreeRow