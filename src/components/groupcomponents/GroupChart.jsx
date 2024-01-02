import React from 'react'
import GroupHeader from './GroupHeader.jsx'
import GroupStudentRow from './GroupStudentRow.jsx'
import ModeButtons from '../mastercomponents/ModeButtons.jsx'
import {useState, useEffect} from 'react'
import axios from 'axios'

const GroupChart = (props) => {

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
<GroupStudentRow
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

export default GroupChart