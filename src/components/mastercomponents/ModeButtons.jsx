import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'

const ModeButtons = (props) => {
    const {isEditing, changeEditMode, changeNormalMode, deleteStudent} = props
    if(isEditing){
        return <td>
            <button onClick={changeNormalMode}>
             <i class="bi bi-save" style={{ fontsize: '2rem', color: 'pink'}}></i>
            </button>
        </td>
    } else {
        return (
            <td>
            <button onClick={changeEditMode}>
                <i class="bi bi-pencil-fill" style={{ fontsize: '2rem', color: 'pink'}}></i>
            </button>
            <button onClick={deleteStudent} variant='secondary'>
                <i class="bi bi-trash3-fill" style={{ fontsize: '2rem', color: 'pink'}}></i>
                </button>
            </td>
        )
    }
}

export default ModeButtons