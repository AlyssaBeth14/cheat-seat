import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import GroupStudentRow from './GroupStudentRow.jsx'

const Groups = (props) => {

  const [currentData, setCurrentData] = useState([])

  useEffect(() => {
    axios.get('/groups')
    .then((res) => {
      console.log(res.data);
      setCurrentData(res.data)
    })
    .catch((err) => {
      console.log(err);
    })
  }, [])

  const deleteGroup = (groupId) => {
    axios.delete(`/group/${groupId}`)
    .then((res) => {
      console.log(res.data);
      setCurrentData(res.data)
    })
    .catch((err) => {
      console.log(err);
    })
  }

  const groups = currentData.map((el) => 
  <GroupStudentRow />
  )

  return (
    <body>
    {/* <div>{groupName}</div> */}
    <button>Edit</button>
    {/* <button deleteGroup={deleteGroup}>Delete</button> */}
    </body>
  )
}

export default Groups