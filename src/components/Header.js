


const Header = ({bannerHeight}) => {

    const css =  {
        height: bannerHeight,
    }

  return (
    <div style = {css} className="banner">
      <div style = {{display: "flex", gap: "40px", marginLeft: "20px"}}>
        <h1>IsaacBergl.com software engineering</h1>
        <div className="banner-line"></div>
      </div>
      <div>
        <h1>projects</h1>
      </div>
      <div>
        <h1>experience</h1>
      </div>
      <div>
        <h1>contact</h1>
      </div>
    </div>

  )
}

export default Header