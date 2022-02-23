import React from "react";
import Panel from "./Panel";

const TimelineEvent = ({ children, title, position, time }) => {
  return (
    <div className="timeline-element-container">
      <div className="ball"></div>
      <Panel
        bannerColor="var(--col-primary)"
        mainColor="var(--col-box-primary)"
        title={
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div>
              <div>{title}</div>
              <div>{position}</div>
            </div>

            <div
              style={{
                // textAlign: "right",
                fontSize: "12px",
                marginLeft: "auto",
              }}
            >
              {time}
            </div>
          </div>
        }
      >
        {" "}
        <div>{children}</div>
      </Panel>
    </div>
  );
};

export default TimelineEvent;
