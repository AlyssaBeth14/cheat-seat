import React from 'react'
import {useState} from 'react'
import StudentId from './StudentId.jsx'
import StudentName from './StudentName.jsx'
import StudentLevel from './StudentLevel.jsx'
import ModeButtons from './ModeButtons.jsx'
import axios from 'axios'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Student = (props) => {
 const {initialStudentData, initialEditMode, deleteStudent, currentData, setCurrentData} = props
 initialStudentData.Groups = initialStudentData.Groups.sort((a,b) => a.groupId - b.groupId)
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
        value={historyLevel}
        onLevelChange={setHistoryLevel}
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
        <StudentLevel 
        isEditing={editMode}
        value={mathLevel}
        onLevelChange={setMathLevel}
        />
        </td>
        <td>
        <StudentLevel 
        isEditing={editMode}
        value={scienceLevel}
        onLevelChange={setScienceLevel}
        />
        </td>
        <td>
        <ModeButtons 
        isEditing={editMode}
        changeEditMode={changeEditMode}
        changeNormalMode={changeNormalMode}
        deleteStudent={deleteStudent}
        />
        </td>
    </tr>
  )
}

export default Student