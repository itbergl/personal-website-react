import React from 'react'

const Home = ({setSpotLight}) => {
  return (
    <div>Home
    <button style={{width:"100px", height:"50px"}} onClick = {() => setSpotLight("Test")}></button>
    </div>
  )
}

export default Home