import React from 'react'
import Button from 'react-bootstrap/Button'

const GroupModeButtons = (props) => {
    const {isEditing, changeEditMode, changeNormalMode}= props
if(isEditing){
    return <td>
        <Button onClick={changeNormalMode} variant='light'>
            <i class="bi bi-save" style={{ fontsize: '2rem', color: '#711971'}}></i>
        </Button>
    </td>
} else {
    return <td>
            <Button onClick={changeEditMode} variant='light'>
                <i class="bi bi-pencil-fill" style={{ fontsize: '2rem', color: '#711971'}}></i>
            </Button>
        </td>
    }
}

export default GroupModeButtons