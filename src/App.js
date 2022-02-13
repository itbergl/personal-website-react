import Banner from "./components/Banner"
import Content from "./components/Content"
import React, { useState } from 'react';

const bannerHeight = "100px"



function App() {
    const [page, setPage] = useState("Home");

    console.log(page)

    return ( 
        <div className = "page" >         
            <Banner className="banner" bannerHeight={bannerHeight} selectedPage = {page} setPage={setPage}></Banner>     
            <Content bannerHeight={bannerHeight}>
                
            </Content>
            
        </div>
    );
}

export default App;