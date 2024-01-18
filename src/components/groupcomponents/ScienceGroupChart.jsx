import React from 'react'
import GroupHeader from './GroupHeader.jsx'
import {useState, useEffect} from 'react'
import axios from 'axios'
import SciStudentRow from './SciStudentRow.jsx'

const ScienceGroupChart = (props) => {

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
    <SciStudentRow
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
          <h1 style={{textAlign: 'center', marginTop: '15px', fontWeight: '800', fontSize: 'xxx-large'}}>Science</h1>
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

export default ScienceGroupChart