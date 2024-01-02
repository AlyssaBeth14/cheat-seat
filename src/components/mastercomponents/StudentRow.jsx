import React from 'react'
import {useState} from 'react'
import StudentId from './StudentId.jsx'
import StudentName from './StudentName.jsx'
import StudentLevel from './StudentLevel.jsx'
import ModeButtons from './ModeButtons.jsx'
import axios from 'axios'

const Student = (props) => {
 const {initialStudentData, initialEditMode, deleteStudent, currentData, setCurrentData} = props
 const [editMode, setIsEditing] = useState(initialEditMode)
 const [studentId, setStudentId] = useState(initialStudentData.studentId)
 const [studentName, setStudentName] = useState(initialStudentData.studentName)
 const [level, setLevel] = useState(initialStudentData.level)


 const changeEditMode = () => setIsEditing(true)
 const changeNormalMode = () => {
    const bodyObj = {

        studentId,
        studentName,
        level
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
    // <div>Student</div>
    <tr>
        <StudentId 
        value={props.rowNum}
        />
        <StudentName 
        isEditing={editMode}
        value={studentName}
        onNameChange={setStudentName}
        />
        <StudentLevel 
        isEditing={editMode}
        value={level}
        onLevelChange={setLevel}
        />
        <ModeButtons 
        isEditing={editMode}
        changeEditMode={changeEditMode}
        changeNormalMode={changeNormalMode}
        deleteStudent={deleteStudent}
        />
    </tr>
  )
}

export default Student