import React from 'react'
import axios from 'axios'
import StudentRow from './StudentRow.jsx'
import MasterListHeader from './MasterListHeader.jsx'
import AddStudent from './AddStudent.jsx'
import { useState, useEffect } from 'react'

const MasterListDisplay = (props) => {

  const [currentData, setCurrentData] = useState([])

  useEffect(() => {
    axios.get('/students')
    .then((res) => {
      console.log(res.data);
      setCurrentData(res.data)
    })
    .catch((err) => {
      console.log(err);
    })
  }, [])

  const addStudent = () => {
    axios.post('/student')
    .then((res) => {
      console.log(res.data);
      setCurrentData(res.data)
    })
    .catch((err) => {
      console.log(err);
    })
  }

  const deleteStudent = (studentId) => {
    axios.delete( `/student/${studentId}`)
    .then((res) => {
      console.log(res.data);
      setCurrentData(res.data)
    })
    .catch((err) => {
      console.log(err);
    })
  }

  const students = currentData.map((el) => <StudentRow 
  initialStudentData={el}
  initialEditMode={false}
  key={el.studentId}
  deleteStudent={() => deleteStudent(el.studentId)}
  currentData={currentData}
  setCurrentData={setCurrentData}
  />)

  return (
    <div>
    <table>
      <thead>
        <MasterListHeader />
     </thead>
     <tbody>
      {students}
     </tbody>
     <tfoot>
      <AddStudent addStudent={addStudent} />
     </tfoot>
    </table>
    </div>
  )
}

export default MasterListDisplay