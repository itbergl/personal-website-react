


const Header = ({bannerHeight, selectedPage, setPage}) => {

  const css =  {
      height: bannerHeight,
  }
  
  return (
    <div style = {css} className="banner">
      <div style = {{display: "flex", gap: "0px"}}>
        <h1 className={selectedPage === "Home"? "banner-text--active": "banner-text"}
          onClick={()=>setPage("Home")}>IsaacBergl.com software engineering</h1>
        <div className="banner-line"></div>
      </div>
      <div>
        <h1 className={selectedPage === "Projects"? "banner-text--active": "banner-text"} 
        css={selectedPage==="Projects"? {color: "var(--col-selected-text)"}:{}} 
        onClick={()=>setPage("Projects")}>projects</h1>
      </div>
      <div>
        <h1 className={selectedPage === "Experience"? "banner-text--active": "banner-text"}
        css={selectedPage==="Experience"? {color: "var(--col-selected-text)"}:{}} 
        onClick={()=>setPage("Experience")}>experience</h1>
      </div>
      <div>
        <h1 className={selectedPage === "Contact"? "banner-text--active": "banner-text"} 
        onClick={()=>setPage("Contact")}>contact</h1>
      </div>
    </div>

  )
}

export default Header