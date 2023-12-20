import React from 'react'

const Student = () => {
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
    <div>Student</div>
  )
}

export default Student