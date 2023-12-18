import React from 'react'

const MasterListDisplay = (props) => {

  return (
    <body>
    <div>
        <MasterListHeader />
    </div>
    <div>
       <col>{studentId}</col>
       <col>{studentName}</col>
       <col>{level}</col>
   </div>
   <div>
       <EditButton />
       <AddButton />
       <DeleteButton />
   </div>
   </body>
  )
}

export default MasterListDisplay