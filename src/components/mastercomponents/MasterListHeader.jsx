import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const MasterListHeader = () => {

  return (
    <tr>
        <th>#</th>
        <th>Name</th>
        <th>History</th>
        <th>English</th>
        <th>Math</th>
        <th>Science</th>
        <th></th>
    </tr>
  )
}

export default MasterListHeader