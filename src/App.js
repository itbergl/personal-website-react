import Header from './components/Header'
import SideBar from './components/SideBar.js'
import Content from './components/Content.js'
import Footer from './components/Footer';
import { useState } from 'react/cjs/react.development';
import Spotlight from './components/Spotlight';

const dimensions = {
 bannerHeight: "10vh",
 footerHeight: "6vh",
 sidebarWidth: "150px"};

const headerFooterColor = "rgb(50, 50, 50)"
const sideBarColor = "rgb(85, 85, 85)"


function App() {
    const [display, setDisplay] = useState(
        "Home"
    )


    const [spotLight, setSpotLight] = useState(
        "None"
    )

    const setContent = (id) => {
        setDisplay(id)
    }

    const setSpotLightContent = (id)=> {
        setSpotLight(id)
    }

    const hideSpotLight = ()=> {
        setSpotLight("None")
    }

    return ( 
        <div className = "container" >         
                <Header dim = {dimensions} color={headerFooterColor}/> 
                {spotLight !== "None"? <Spotlight display = {spotLight} hideSpotLight={hideSpotLight}/>: ""}
                <div dim = {dimensions} className='middle'>
                    <SideBar dim = {dimensions} color={sideBarColor} setContent={setContent}/>
                    
                    <Content dim = {dimensions} display={display} setSpotLight={setSpotLight} />
                      
                </div>
                
                <Footer dim = {dimensions} color={headerFooterColor}/>
                         
        </div>
    );
}


export default App;