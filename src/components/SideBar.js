import SideButton from "./SideButton"


const SideBar = ({dim, color, setContent}) => {

    const css = {
        float: "left",
        backgroundColor: color,
        width: dim["sidebarWidth"],
        top: dim["bannerHeight"],
        height: `calc(100vh - ${dim["bannerHeight"]} - ${dim["footerHeight"]})`,
        position: "fixed"
    }

  return (
    <div className="side-bar" style = {css}>
      <SideButton name = "Home" setContent={setContent}/>
      <SideButton name = "Projects" setContent={setContent}/>
      <SideButton name = "Contact" setContent={setContent}/>

    </div>

  )
}

export default SideBar