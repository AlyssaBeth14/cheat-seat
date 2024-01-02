import React from 'react'

const GroupModeButtons = (props) => {
    const {isEditing, changeEditMode, changeNormalMode}= props
if(isEditing){
    return <td>
        <button onClick={changeNormalMode}>Save</button>
    </td>
} else {
    return <td>
            <button onClick={changeEditMode}>Edit</button>
        </td>
    }
}

export default GroupModeButtons