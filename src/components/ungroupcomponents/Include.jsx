import React from 'react'

const Include = (props) => {
  const {isEditing, onIncludeChange, value: added, changeNormalMode} = props
    const toggle = () => {
      if(added === false){
        onIncludeChange(true)
        console.log('if hit');
      } else {
        onIncludeChange(false)
        console.log('else hit!');
      }
      // changeNormalMode()
    }
// console.log(added);
  return (
    <input type='checkbox' 
    value={added}
    checked={added}
    onChange={toggle}/>
  ) 
}

export default Include