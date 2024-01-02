import React from 'react'

const Include = (props) => {
  const {onIncludeChange} = props
  return (
    <input type='checkbox' 
    value={false}
    onChange={(e) => onIncludeChange(e.target.value)}/>
  )
}

export default Include