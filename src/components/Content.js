
import Home from "./SubPages/Home"
import Projects from "./SubPages/Projects"
import Contact from "./SubPages/Contact"


const Content = ({dim, color, display, setSpotLight}) => {

  const dest = `./components/SubPages/${display}.js`
  console.log(dest)

    const padding = "5vh";
  
    const css = {
        overflowY: "scroll",
        top: dim["bannerHeight"],
        left: dim["sidebarWidth"],
        width: `calc(100vw - ${dim["sidebarWidth"]})`,
        position: "fixed",
        backgroundColor: "yellow",
        height: `calc(100vh - ${dim["bannerHeight"]} - ${dim["footerHeight"]})`
    }

    const getPage = () => {
      switch (display) {
        case ("Home"):
          return <Home setSpotLight={setSpotLight}/>
        case ("Projects"):
          return <Projects setSpotLight={setSpotLight} />
        case ("Contact"):
          return <Contact setSpotLight={setSpotLight}/>
        default:
          return <div>No such page "{display}"" exists.</div>
      }
    }
  
    return (
      <div className="content" style = {css}>
        <div style = {{padding: padding}}>
          {getPage()}
          </div>
        </div>
  
    )
  }
  
  export default Content