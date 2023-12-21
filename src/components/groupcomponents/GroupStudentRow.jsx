import React from 'react'
import StudentId from '../mastercomponents/StudentId.jsx'
import StudentName from '../mastercomponents/StudentName.jsx'
import StudentLevel from '../mastercomponents/StudentLevel.jsx'
import Notes from './Notes.jsx'
import Student from '../mastercomponents/StudentRow.jsx'

const GroupStudentRow = (props) => {

  const {isEditing, editMode, setStudentId, setStudentName, onIdChange, onNameChange, onLevelChange, setLevel} = props
  return (
    <tr>
        <StudentId 
        isEditing={editMode}
        value={studentId}
        onIdChange={setStudentId}
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