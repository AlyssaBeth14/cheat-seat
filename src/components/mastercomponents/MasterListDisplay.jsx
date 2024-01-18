import React from 'react'
import axios from 'axios'
import StudentRow from './StudentRow.jsx'
import MasterListHeader from './MasterListHeader.jsx'
import AddStudent from './AddStudent.jsx'
import { useState, useEffect } from 'react'
// import Notes from '../groupcomponents/Notes.jsx'

const MasterListDisplay = (props) => {

  const [currentData, setCurrentData] = useState([])
  // const [notes, setNotes] = useState(true)

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

  // const showNotes = () => {
  //   setNotes(!notes)
  // }

  const addStudent = () => {
    console.log('function hit');
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

  const students = currentData.map((el, index) => <StudentRow 
  rowNum = {index+1}
  initialStudentData={el}
  initialEditMode={false}
  key={el.studentId}
  deleteStudent={() => deleteStudent(el.studentId)}
  currentData={currentData}
  setCurrentData={setCurrentData}
  />)

  return (
    <div style={{}}>
    <table style={{textAlign: 'center', borderRadius: '25px'}}>
      <thead>
        <MasterListHeader />
     </thead>
     <tbody className='scrolldown'>
      {students}
      {/* {notes && <Notes />}
      <button onClick={showNotes}>toggle</button> */}
     </tbody>
    </table>
    <AddStudent addStudent={addStudent} />
    </div>
  )
}

export default MasterListDisplay