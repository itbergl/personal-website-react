import React from "react";
import Panel from "./Panel";

import email from "../../images/email.png";
import phone from "../../images/phone.png";
import linkedin from "../../images/linkedin.png";
import github from "../../images/github.png";

const Contact = () => {
  return (
    <div>
      <div className="title-panel-container">
        <Panel
          titlePanel={true}
          content={
            <div className="panel-text">
              Contact me with the details below, or click on links to my other
              profiles.
            </div>
          }
          width={"40vw"}
          title={<div className="page-title">Contact</div>}
          bottom={false}
          // change this
        />

        <div className="contact-list">
          <Panel
            title={
              <img src={email} alt="email icon" className="contact-icon"></img>
            }
            content={
              <div className="contact-info">isaac.bergl@outlook.com</div>
            }
            horizontal={true}
            // bottom={false}
          />
          <Panel
            title={
              <img src={phone} alt="phone icon" className="contact-icon"></img>
            }
            content={<div className="contact-info">+61 43 960 473</div>}
            horizontal={true}
            // bottom={false}
          />
          <Panel
            title={
              <img
                src={linkedin}
                alt="linkedin icon"
                className="contact-icon"
              ></img>
            }
            content={
              <div className="contact-info">
                <a
                  className="external-link"
                  href={"https://www.linkedin.com/in/isaac-bergl-2531b81b5/"}
                >
                  my LinkedIn profile
                </a>
              </div>
            }
            horizontal={true}
            // bottom={false}
          />
          <Panel
            title={
              <img
                src={github}
                alt="github icon"
                className="contact-icon"
              ></img>
            }
            content={
              <div className="contact-info">
                <a
                  className="external-link"
                  href={"https://github.com/itbergl"}
                >
                  my github profile
                </a>
              </div>
            }
            horizontal={true}
            // bottom={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
