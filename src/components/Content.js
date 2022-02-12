

const Content = ({bannerHeight}) => {
    const css = {
        top: bannerHeight,
        height: `calc(100vh - ${bannerHeight})`
    }

    // const getPage = () => {
    //   switch (display) {
    //     case ("Home"):
    //       return <Home setSpotLight={setSpotLight}/>
    //     case ("Projects"):
    //       return <Projects setSpotLight={setSpotLight} />
    //     case ("Contact"):
    //       return <Contact setSpotLight={setSpotLight}/>
    //     default:
    //       return <div>No such page "{display}"" exists.</div>
    //   }
    // }
  
    return (
      <div className="content" style = {css}></div>
  
    )
  }
  
  export default Content