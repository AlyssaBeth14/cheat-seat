import React from 'react'
import UngroupHeader from './UngroupHeader'
import UngroupStudentRow from './UngroupStudentRow'
import UngroupStudentList from './UngroupStudentList'
import {useState, useEffect} from 'react'
import axios from 'axios'

const UngroupChart = (props) => {
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

  const students = currentData.map((el, index) => 
  <UngroupStudentRow
  rowNum= {index+1}
  initialStudentData={el}
  initialEditMode={false}
  key={el.studentId}
  currentData={currentData}
  setCurrentData={setCurrentData}
  />
  )

  return (
    <body>
      <table>
        <thead>
         <UngroupHeader />
        </thead>
         <tbody>
          {students}
        </tbody>
      </table>
      <div>
      {/* <UngroupStudentList /> */}
      </div>
    </body>
  )
}

export default UngroupChart