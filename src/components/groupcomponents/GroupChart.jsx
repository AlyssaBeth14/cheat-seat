import React from 'react'
import GroupHeader from './GroupHeader.jsx'
import GroupStudentRow from './GroupStudentRow.jsx'
import ModeButtons from '../mastercomponents/ModeButtons.jsx'

const GroupChart = () => {
  return (
    <div>
      <table>
        <thead>
          <GroupHeader />
        </thead>
        <tbody>
         <GroupStudentRow />
        </tbody>
        <tfoot>
          <ModeButtons />
        </tfoot>  
      </table>
    </div>
  )
}

export default GroupChart