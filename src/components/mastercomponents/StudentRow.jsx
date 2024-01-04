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
 const [studentName, setStudentName] = useState(initialStudentData.studentName)
 const [historyLevel, setHistoryLevel] = useState(initialStudentData.Groups[0].StudentGroup.level)
 const [englishLevel, setEnglishLevel] = useState(initialStudentData.Groups[1].StudentGroup.level)
 const [mathLevel, setMathLevel] = useState(initialStudentData.Groups[2].StudentGroup.level)
 const [scienceLevel, setScienceLevel] = useState(initialStudentData.Groups[3].StudentGroup.level)
const {studentId} = initialStudentData

 const changeEditMode = () => setIsEditing(true)
 const changeNormalMode = () => {
    const bodyObj = {
        studentId,
        studentName,
        historyLevel,
        englishLevel,
        mathLevel,
        scienceLevel
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
        <StudentLevel 
        isEditing={editMode}
        value={englishLevel}
        onLevelChange={setEnglishLevel}
        />
        <StudentLevel 
        isEditing={editMode}
        value={mathLevel}
        onLevelChange={setMathLevel}
        />
        <StudentLevel 
        isEditing={editMode}
        value={scienceLevel}
        onLevelChange={setScienceLevel}
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