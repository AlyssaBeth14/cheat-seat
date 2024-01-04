import React from 'react'
import StudentId from '../mastercomponents/StudentId.jsx'
import StudentName from '../mastercomponents/StudentName.jsx'
import StudentLevel from '../mastercomponents/StudentLevel.jsx'
import Notes from './Notes.jsx'
import GroupModeButtons from './GroupModeButtons.jsx'
import axios from 'axios'
import { useState, useEffect } from 'react'

const HistStudentRow = (props) => {

    const {initialStudentData, initialEditMode, currentData, setCurrentData} = props
    initialStudentData.Groups = initialStudentData.Groups.sort((a,b) => a.groupId - b.groupId)
    const [editMode, setIsEditing] = useState(initialEditMode)
    const [studentName, setStudentName] = useState(initialStudentData.studentName)
    const [historyLevel, setHistoryLevel] = useState(initialStudentData.Groups[0].StudentGroup.level)
    const [historyNotes, setHistoryNotes] = useState(initialStudentData.Groups[0].StudentGroup.notes)
    const {studentId} = initialStudentData
  
    const changeEditMode = () => setIsEditing(true)
    const changeNormalMode = () => {
        const bodyObj = {
          studentId,
          studentName,
          historyLevel,
          historyNotes
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
          isEditing={editMode}
          value={studentName}
          onNameChange={setStudentName}
          />
          <StudentLevel 
          isEditing={editMode}
          value={historyLevel}
          onLevelChange={setHistoryLevel}
          />       
          <Notes 
          isEditing={editMode}
          value={historyNotes}
          onNotesChange={setHistoryNotes}
          />
          <GroupModeButtons
          isEditing={editMode}
          changeEditMode={changeEditMode}
          changeNormalMode={changeNormalMode}
          />      
      </tr>
    )
  }
  

export default HistStudentRow