import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import GroupHeader from './GroupHeader.jsx'
import EngStudentRow from './EngStudentRow.jsx'

const EnglishGroupChart = (props) => {

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
    <EngStudentRow
    rowNum = {index+1}
    initialStudentData={el}
    initialEditMode={false}
    key={el.studentId}
    currentData={currentData}
    setCurrentData={setCurrentData}
    />
    )
      return (
        <div>
          <table>
            <thead>
              <GroupHeader />
            </thead>
            <tbody>
             {students}
            </tbody> 
          </table>
        </div>
      )
    }

export default EnglishGroupChart