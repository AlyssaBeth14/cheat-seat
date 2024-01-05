import React from 'react'
import UngroupHeader from './UngroupHeader.jsx'
import UngroupThreeRow from './UngroupThreeRow.jsx'
import { useState, useEffect } from 'react'
import axios from 'axios'

const UngroupThreeChart = (props) => {
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
    <UngroupThreeRow
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

export default UngroupThreeChart