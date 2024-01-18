import React from 'react'
import StudentId from '../mastercomponents/StudentId.jsx'
import StudentName from '../mastercomponents/StudentName.jsx'
import StudentLevel from '../mastercomponents/StudentLevel.jsx'
import Notes from './Notes.jsx'
import GroupModeButtons from './GroupModeButtons.jsx'
import axios from 'axios'
import { useState, useEffect } from 'react'

const MathStudentRow = (props) => {

  const {initialStudentData, initialEditMode, currentData, setCurrentData} = props
  initialStudentData.Groups = initialStudentData.Groups.sort((a,b) => a.groupId - b.groupId)
  const [editMode, setIsEditing] = useState(initialEditMode)
  const [studentName, setStudentName] = useState(initialStudentData.studentName)
  const [mathLevel, setMathLevel] = useState(initialStudentData.Groups[2].StudentGroup.level)
  const [mathNotes, setMathNotes] = useState(initialStudentData.Groups[2].StudentGroup.notes)
  const {studentId} = initialStudentData

  const changeEditMode = () => setIsEditing(true)
  const changeNormalMode = () => {
      const bodyObj = {
        studentId,
        studentName,
        mathLevel,
        mathNotes
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
        <td>
        <StudentId 
        studentId={props.rowNum}
        />
        </td>
        <td>
        <StudentName 
        isEditing={editMode}
        value={studentName}
        onNameChange={setStudentName}
        />
        </td>
        <td>
        <StudentLevel 
        isEditing={editMode}
        value={mathLevel}
        onLevelChange={setMathLevel}/>   
        </td>
        <td style={{width: '25vw'}}>  
        <Notes 
        isEditing={editMode}
        value={mathNotes}
        onNotesChange={setMathNotes}
        />
        </td>  
        <td>
        <GroupModeButtons
        isEditing={editMode}
        changeEditMode={changeEditMode}
        changeNormalMode={changeNormalMode}
        />      
        </td>
    </tr>
  )
}

export default MathStudentRow