import React from 'react'

const Include = (props) => {
  const {isEditing, onIncludeChange, value, changeNormalMode} = props
    const toggle = () => {
      if(value === false){
        onIncludeChange(true)
        console.log('if hit');
      } else {
        onIncludeChange(false)
        console.log('else hit!');
      }
    }
console.log(value);
  return (
    <input type='checkbox' 
    value={value}
    onClick={toggle}/>
  ) 
}

export default Include