import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Button from 'react-bootstrap/Button'

const ModeButtons = (props) => {
    const {isEditing, changeEditMode, changeNormalMode, deleteStudent} = props
    if(isEditing){
        return <td>
            <Button onClick={changeNormalMode} variant='light'>
             <i class="bi bi-save" style={{ fontsize: '2rem', color: '#711971'}}></i>
            </Button>
        </td>
    } else {
        return (
            <td>
            <Button onClick={changeEditMode} variant='light'>
                <i class="bi bi-pencil-fill" style={{ fontsize: '2rem', color: '#711971'}}></i>
            </Button>
            <Button onClick={deleteStudent} variant='light'>
                <i class="bi bi-trash3-fill" style={{ fontsize: '2rem', color: '#711971'}}></i>
                </Button>
            </td>
        )
    }
}

export default ModeButtons