import React from 'react'
import axios from 'axios'
import { Student } from '../../../server/db/models.jsx'

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

  const students = currentData.map((el) => <Student 
  initialStudentData={el}
  initialEditMode={false}
  key={el.studentId}
  deleteStudent={() => deleteStudent(el.studentId)}
  currentData={currentData}
  setCurrentData={setCurrentData}
  />)

  return (
    <body>
    <div>
        <MasterListHeader />
    </div>
    <div>
       <col>{studentId}</col>
       <col>{studentName}</col>
       {/* <col>{level}</col> */}
   </div>
   <div>
       <button>Edit Students</button>
       <button addStudent={addStudent}>Add Student</button>
       <button deleteStudent={deleteStudent}>Delete Students</button>
   </div>
   </body>
  )
}

export default MasterListDisplay