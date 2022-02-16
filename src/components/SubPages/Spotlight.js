import React from "react";
import closeIcon from "../../images/close.png";
const Spotlight = ({ content, closeFunc }) => {
  return (
    <div>
      <div className="overlay">
        <img
          src={closeIcon}
          alt={"close icon"}
          className="close-overlay"
          onClick={() => closeFunc(false)}
        ></img>
        {content}
      </div>
    </div>
  );
};

export default Spotlight;
