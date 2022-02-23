import React from "react";
import Panel from "./Panel";

const TimelineEvent = ({ children, title, time }) => {
  return (
    <div className="timeline-element-container">
      <div className="ball"></div>
      <Panel
        bannerColor="var(--col-primary)"
        mainColor="var(--col-box-primary)"
        title={title}
      >
        {" "}
        <div>{children}</div>
      </Panel>
    </div>
  );
};

export default TimelineEvent;
