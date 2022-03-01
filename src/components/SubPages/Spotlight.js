import React from "react";
import { MdClose } from "react-icons/md";

const Spotlight = ({ children, closeFunc }) => {
  return (
    <div>
      <div className="overlay">
        <div className="close-overlay" onClick={() => closeFunc(false)}>
          <MdClose />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Spotlight;
