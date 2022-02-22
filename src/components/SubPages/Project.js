import React, { Children } from "react";
import Technology from "./Technology";
import Panel from "./Panel";
import github from "../../images/github.png";

const Project = ({ children, name, technologies, repo }) => {
  return (
    <Panel
      title={<div className="page-title">{name}</div>}
      footer={
        <div
          className="technology-home-grid"
          style={{ padding: "8px 0 8px 0" }}
        >
          {technologies.map((tech) => (
            <Technology key={tech} height="40px" name={tech}></Technology>
          ))}
        </div>
      }
      //   onClick={() =>
      //     showOverlay(<Panel title={<div>Hello There</div>}></Panel>)
      //   }
    >
      {" "}
      <div style={{ display: "flex", flexDirection: "column", rowGap: "20px" }}>
        <div className="panel-text">{children}</div>
        <a
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          href={repo}
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={github}
            alt="github icon"
            className="contact-icon icon"
          ></img>
        </a>
      </div>
    </Panel>
  );
};

export default Project;
