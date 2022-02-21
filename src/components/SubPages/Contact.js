import React from "react";
import Panel from "./Panel";

import email from "../../images/email.png";
import phone from "../../images/phone.png";
import linkedin from "../../images/linkedin.png";
import github from "../../images/github.png";

const Contact = () => {
  const colWidth = "100%";
  // breaks at width = 870px
  return (
    <div>
      <div className="contact-list">
        <Panel
          width={colWidth}
          // bannerColor="var(--col-primary)"
          title={
            <img
              src={email}
              alt="email icon"
              className="contact-icon icon"
            ></img>
          }
          horizontal
          footer={<div className="contact-icon icon"></div>}
        >
          {" "}
          <div style={{ width: colWidth }}>
            <h3 className="contact-info">isaac.bergl@outlook.com</h3>
          </div>
        </Panel>
        <Panel
          width={colWidth}
          title={
            <img
              src={phone}
              alt="phone icon"
              className="contact-icon icon"
            ></img>
          }
          horizontal
          footer={<div className="contact-icon icon"></div>}
        >
          {" "}
          <div style={{ width: colWidth }}>
            <h3 className="contact-info">+61 43 960 473</h3>
          </div>
        </Panel>
        <Panel
          width={colWidth}
          title={
            <img
              src={linkedin}
              alt="linkedin icon"
              className="contact-icon icon"
            ></img>
          }
          horizontal
          footer={<div className="contact-icon icon"></div>}
        >
          <div style={{ width: colWidth }}>
            <h3 className="contact-info external-link">
              <a href={"https://www.linkedin.com/in/isaac-bergl-2531b81b5/"}>
                my LinkedIn profile
              </a>
            </h3>
          </div>
        </Panel>
        <Panel
          width={colWidth}
          title={
            <img
              src={github}
              alt="github icon"
              className="contact-icon icon"
            ></img>
          }
          horizontal
          footer={<div className="contact-icon icon"></div>}
        >
          <div style={{ width: colWidth }}>
            <h3 className="contact-info external-link">
              <a href={"https://github.com/itbergl"}> my github profile</a>
            </h3>
          </div>
        </Panel>
      </div>
    </div>
  );
};

export default Contact;
