import React from 'react'

const ModeButtons = (props) => {
    const {isEditing, changeEditMode, changeNormalMode, deleteStudent} = props
    if(isEditing){
        return <td>
            <button onClick={changeNormalMode}>Save</button>
        </td>
    } else {
        return (
            <td>
            <button onClick={changeEditMode}>Edit</button>
            <button onClick={deleteStudent}>Delete</button>
            </td>
        )
    }
}

export default ModeButtons