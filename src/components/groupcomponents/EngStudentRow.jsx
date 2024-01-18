import React from 'react'
import StudentId from '../mastercomponents/StudentId.jsx'
import StudentName from '../mastercomponents/StudentName.jsx'
import StudentLevel from '../mastercomponents/StudentLevel.jsx'
import Notes from './Notes.jsx'
import GroupModeButtons from './GroupModeButtons.jsx'
import axios from 'axios'
import { useState, useEffect } from 'react'

const EngStudentRow = (props) => {

  const {initialStudentData, initialEditMode, currentData, setCurrentData} = props
  initialStudentData.Groups = initialStudentData.Groups.sort((a,b) => a.groupId - b.groupId)
  const [editMode, setIsEditing] = useState(initialEditMode)
  const [studentName, setStudentName] = useState(initialStudentData.studentName)
  const [englishLevel, setEnglishLevel] = useState(initialStudentData.Groups[1].StudentGroup.level)
  const [englishNotes, setEnglishNotes] = useState(initialStudentData.Groups[1].StudentGroup.notes)
  const {studentId} = initialStudentData

  const changeEditMode = () => setIsEditing(true)
  const changeNormalMode = () => {
      const bodyObj = {
        studentId,
        studentName,
        englishLevel,
        englishNotes
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
        value={englishLevel}
        onLevelChange={setEnglishLevel}
        />  
        </td>
        <td>    
        <Notes 
        isEditing={editMode}
        value={englishNotes}
        onNotesChange={setEnglishNotes}
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

export default EngStudentRow