import React from "react";

const Spotlight = ({ content, closeFunc }) => {
  return (
    <div>
      {content !== "hidden" ? (
        <div className="overlay">
          <div className="close-overlay" onClick={closeFunc}></div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Spotlight;
