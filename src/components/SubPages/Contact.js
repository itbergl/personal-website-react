import React from "react";
import Panel from "./Panel";

import resume from "../../images/resume.png";
import { FaFileDownload } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

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
            <div className="contact-icon icon white">
              <AiOutlineMail size="100%" />
            </div>
          }
          horizontal
          footer={<div className="contact-icon icon"></div>}
          //
        >
          {" "}
          <div style={{ width: colWidth }}>
            <h3 className="contact-info">isaac.bergl@outlook.com</h3>
          </div>
        </Panel>
        <Panel
          width={colWidth}
          title={
            <div className="contact-icon icon white">
              <FaPhoneSquareAlt size="100%" />
            </div>
          }
          horizontal
          footer={<div className="contact-icon icon"></div>}
          //
        >
          {" "}
          <div style={{ width: colWidth }}>
            <h3 className="contact-info">+61 43 960 473</h3>
          </div>
        </Panel>
        <Panel
          width={colWidth}
          title={
            <div className="contact-icon icon white">
              <FaLinkedin size="100%" />
            </div>
          }
          horizontal
          footer={<div className="contact-icon icon"></div>}
          //
        >
          <div style={{ width: colWidth }}>
            <h3 className="contact-info external-link">
              <a
                href={"https://www.linkedin.com/in/isaac-bergl-2531b81b5/"}
                target="_blank"
                rel="noreferrer"
              >
                my LinkedIn profile
              </a>
            </h3>
          </div>
        </Panel>
        <Panel
          width={colWidth}
          title={
            <div className="contact-icon icon white">
              <FaGithub size="100%" />
            </div>
          }
          horizontal
          footer={<div className="contact-icon icon"></div>}
        >
          <div style={{ width: colWidth }}>
            <h3 className="contact-info external-link">
              <a
                href={"https://github.com/itbergl"}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                my github profile
              </a>
            </h3>
          </div>
        </Panel>
        <Panel
          width={colWidth}
          title={
            <img
              src={resume}
              alt="document icon"
              className="contact-icon icon white"
            ></img>
          }
          horizontal
          footer={<div className="contact-icon icon"></div>}
        >
          <div style={{ width: colWidth }}>
            <h3 className="contact-info external-link">
              <FaFileDownload size="18px" color="white" />{" "}
              <a
                href={"documents/Resume 2022.pdf"}
                download="Isaac Bergl Resume.pdf"
              >
                Download my Resume
              </a>
            </h3>
          </div>
        </Panel>
      </div>
    </div>
  );
};

export default Contact;
