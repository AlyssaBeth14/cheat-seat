import React from 'react'

const ModeButtons = (props) => {
    const {isEditing, changeEditMode, changeNormalMode, deleteStudent} = props
    if(isEditing){
        return <div>
            <button onClick={changeNormalMode}>Save</button>
        </div>
    } else {
        return (
            <div>
            <button onClick={changeEditMode}>Edit</button>
            <button onClick={deleteStudent}>Delete</button>
            </div>
        )
    }
}

export default ModeButtons