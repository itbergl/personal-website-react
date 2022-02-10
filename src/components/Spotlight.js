import React from 'react'

const Spotlight = ({display, hideSpotLight}) => {
    console.log(display)
  return (
    <div className="spotlight" style={{width: "40vw", height: "60vh"} } onClick={hideSpotLight}>{display}</div>
  )
}

export default Spotlight