import React from 'react'

const GroupModeButtons = (props) => {
    const {isEditing, changeEditMode, changeNormalMode}= props
if(isEditing){
    return <td>
        <button onClick={changeNormalMode}>
            <i class="bi bi-save" style={{ fontsize: '2rem', color: 'pink'}}></i>
        </button>
    </td>
} else {
    return <td>
            <button onClick={changeEditMode}>
                <i class="bi bi-pencil-fill" style={{ fontsize: '2rem', color: 'pink'}}></i>
            </button>
        </td>
    }
}

export default GroupModeButtons