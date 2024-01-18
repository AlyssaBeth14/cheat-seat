import React from 'react'
import StudentId from '../mastercomponents/StudentId.jsx'
import StudentName from '../mastercomponents/StudentName.jsx'
import StudentLevel from '../mastercomponents/StudentLevel.jsx'
import Notes from './Notes.jsx'
import GroupModeButtons from './GroupModeButtons.jsx'
import axios from 'axios'
import { useState, useEffect } from 'react'

const SciStudentRow = (props) => {

  const {initialStudentData, initialEditMode, currentData, setCurrentData} = props
  initialStudentData.Groups = initialStudentData.Groups.sort((a,b) => a.groupId - b.groupId)
  const [editMode, setIsEditing] = useState(initialEditMode)
  const [studentName, setStudentName] = useState(initialStudentData.studentName)
  const [scienceLevel, setScienceLevel] = useState(initialStudentData.Groups[3].StudentGroup.level)
  const [scienceNotes, setScienceNotes] = useState(initialStudentData.Groups[3].StudentGroup.notes)
  const {studentId} = initialStudentData

  const changeEditMode = () => setIsEditing(true)
  const changeNormalMode = () => {
      const bodyObj = {
        studentId,
        studentName,
        scienceLevel,
        scienceNotes
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
        value={scienceLevel}
        onLevelChange={setScienceLevel}/>   
        </td>
        <td style={{width: '25vw'}}>
        <Notes 
        isEditing={editMode}
        value={scienceNotes}
        onNotesChange={setScienceNotes}
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

export default SciStudentRow