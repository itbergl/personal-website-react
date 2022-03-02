import Banner from "./components/Banner";

import React, { useState } from "react";
import Spotlight from "./components/SubPages/Spotlight";
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Home from "./components/SubPages/Home";
import Projects from "./components/SubPages/Projects";
// import Experience from "./components/SubPages/Experience";
import Contact from "./components/SubPages/Contact";

const bannerHeight = "70px";

function App() {
  // TODO caching

  const [selectedPage, setSelectedPage] = useState("/home");

  const [overlay, setOverlay] = useState("hidden");

  const [spotlightvisible, setspotlightvisible] = useState(false);

  const showOverlay = (content) => {
    setOverlay(content);
    setspotlightvisible(true);
  };

  return (
    <div className="page">
      <Router>
        <div></div>
        {spotlightvisible ? (
          <Spotlight
            content={overlay}
            closeFunc={setspotlightvisible}
          ></Spotlight>
        ) : null}
        <Banner
          className="banner"
          bannerHeight={bannerHeight}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        ></Banner>
        <div
          className="scroll-content"
          style={{
            top: bannerHeight,
            height: `calc(100vh - ${bannerHeight})`,
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="/home" />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route
              path="/projects"
              element={<Projects showOverlay={showOverlay} />}
            ></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
