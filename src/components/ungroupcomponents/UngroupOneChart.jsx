import React from 'react'
import UngroupHeader from './UngroupHeader.jsx'
import UngroupOneRow from './UngroupOneRow.jsx'
import { useState, useEffect } from 'react'
import axios from 'axios'

const UngroupOneChart = (props) => {
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
    <UngroupOneRow
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
      </body>
    )
  }

export default UngroupOneChart