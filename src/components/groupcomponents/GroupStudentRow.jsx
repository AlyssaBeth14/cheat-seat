import React from 'react'
import StudentId from '../mastercomponents/StudentId.jsx'
import StudentName from '../mastercomponents/StudentName.jsx'
import StudentLevel from '../mastercomponents/StudentLevel.jsx'
import Notes from './Notes.jsx'
import Student from '../mastercomponents/StudentRow.jsx'
import axios from 'axios'
import {useState, useEffect} from 'react'

const GroupStudentRow = (props) => {

  const {initialStudentData, initialEditMode, currentData, setCurrentData} = props
  const [editMode, setIsEditing] = useState(initialEditMode)
  // const [studentId, setStudentId] = useState(initialStudentData.studentId)
  const [studentName, setStudentName] = useState(initialStudentData.studentName)
  const [level, setLevel] = useState(initialStudentData.level)
  const [notes, setNotes] = useState(initialStudentData.notes)
  const {studentId} = initialStudentData

  const changeEditMode = () => setIsEditing(true)
  const changeNormalMode = () => {
      const bodyObj = {
        studentId,
        studentName,
        level,
        notes
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
        value={studentId}
        />
        <StudentName 
        isEditing={editMode}
        value={studentName}
        onNameChange={setStudentName}
        />
        <StudentLevel 
        isEditing={editMode}
        value={level}
        onLevelChange={setLevel}/>       
        <Notes 
        isEditing={editMode}
        value={notes}
        onNotesChange={setNotes}
        />      
    </tr>
  )
}

export default GroupStudentRow