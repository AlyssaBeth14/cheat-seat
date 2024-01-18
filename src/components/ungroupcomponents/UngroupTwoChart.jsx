import React from 'react'
import UngroupHeader from './UngroupHeader.jsx'
import UngroupTwoRow from './UngroupTwoRow.jsx'
import { useState, useEffect } from 'react'
import axios from 'axios'
import UngroupStudentList from './UngroupStudentList.jsx'


const UngroupTwoChart = (props) => {
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
    <UngroupTwoRow
    rowNum= {index+1}
    initialStudentData={el}
    initialEditMode={false}
    key={el.studentId}
    currentData={currentData}
    setCurrentData={setCurrentData}
    />
    )
  
    return (
      <div>
      <main>
        <section style={{height: '66%',  width: '30%', float: 'left'}}>
          <table>
            <thead>
              <UngroupHeader />
            </thead>
             <tbody>
              {students}
            </tbody>
          </table>
        </section>
        <section style={{height: '100vh', width: '70%', float: 'right' }}>
          <div style={{height: '65%', width: '75%', border: '7px solid #deacde', marginLeft: '100px', marginTop: '60px', borderRadius: '10px', backgroundColor: 'mintcream'}}>
            <div style={{fontSize: 'xxx-large', fontWeight: '1000', marginLeft: '30px' }}>
            Ungroup 2:
            </div>
            <div>

            </div>
          </div>

        </section>
      </main>
    </div>
    )
  }

export default UngroupTwoChart