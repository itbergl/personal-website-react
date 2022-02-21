import Banner from "./components/Banner";
import Content from "./components/Content";
import React, { useState } from "react";
import Spotlight from "./components/SubPages/Spotlight";

const bannerHeight = "70px";

function App() {
  const [page, setPage] = useState("Home");
  // TODO caching

  const [overlay, setOverlay] = useState("hidden");
  const [spotlightvisible, setspotlightvisible] = useState(false);

  const showOverlay = (content) => {
    setOverlay(content);
    setspotlightvisible(true);
  };

  return (
    <div className="page">
      {spotlightvisible ? (
        <Spotlight
          content={overlay}
          closeFunc={setspotlightvisible}
        ></Spotlight>
      ) : null}
      <Banner
        className="banner"
        bannerHeight={bannerHeight}
        selectedPage={page}
        setPage={setPage}
      ></Banner>
      <Content
        bannerHeight={bannerHeight}
        selectedPage={page}
        showOverlay={showOverlay}
      ></Content>
    </div>
  );
}

export default App;
