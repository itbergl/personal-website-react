import React from 'react'

const SideButton = ({name, setContent}) => {
  return (
    <div style={{backgroundColor: "red"}} onClick={() => {setContent(name)}}>{name}</div>
  )
}

export default SideButton