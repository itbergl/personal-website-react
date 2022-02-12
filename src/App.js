import Header from "./components/Header"
import Content from "./components/Content"

const dim = {
    "bannerHeight": "100px"
}

function App() {

    return ( 
        <div className = "page" >         
            <Header className="banner" dim = {dim}></Header>     
            <Content dim={dim}></Content>
        </div>
    );
}


export default App;