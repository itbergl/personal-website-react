import Banner from "./components/Banner";
import Content from "./components/Content";
import React, { useState } from "react";
import Spotlight from "./components/SubPages/Spotlight";

const bannerHeight = "100px";

function App() {
  const [page, setPage] = useState("Home");
  // TODO caching

  const [overlay, setOverlay] = useState("hidden");

  const closeFunc = () => {
    setOverlay("hidden");
  };

  return (
    <div className="page">
      <Spotlight content={overlay} closeFunc={closeFunc}></Spotlight>
      <Banner
        className="banner"
        bannerHeight={bannerHeight}
        selectedPage={page}
        setPage={setPage}
      ></Banner>
      <Content bannerHeight={bannerHeight} selectedPage={page}></Content>
    </div>
  );
}

export default App;
