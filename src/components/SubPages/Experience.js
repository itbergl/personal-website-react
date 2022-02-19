import Panel from "./Panel";

const Experience = () => {
  return (
    <div>
      <div className="timeline">
        <div className="timeline-line"></div>
        <div className="year-label">
          <h3>Today</h3>
        </div>
        <div className="timeline-element-container">
          <div className="ball"></div>
          <Panel
            bannerColor="var(--col-primary)"
            mainColor="var(--col-box-primary)"
            title={<div>Chevron</div>}
            bottom={false}
          >
            {" "}
            <div>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
              eligendi ab, enim eveniet atque, hic magnam voluptatibus non
              excepturi quaerat sint quos, cumque voluptates rerum a omnis
              distinctio. Non, illo?
            </div>
          </Panel>
        </div>
        <div className="timeline-element-container">
          <div className="ball"></div>
          <Panel
            bannerColor="var(--col-primary)"
            mainColor="var(--col-box-primary)"
            title={<div>Chevron</div>}
            bottom={false}
          >
            {" "}
            <div>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
              eligendi ab, enim eveniet atque, hic magnam voluptatibus non
              excepturi quaerat sint quos, cumque voluptates rerum a omnis
              distinctio. Non, illo?
            </div>
          </Panel>
        </div>
        <div className="year-label">
          <h3>2022</h3>
        </div>
        <div />
        <div className="timeline-element-container">
          <div className="ball"></div>
          <Panel
            bannerColor="var(--col-primary)"
            mainColor="var(--col-box-primary)"
            title={<div>Chevron</div>}
            bottom={false}
          >
            {" "}
            <div>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
              eligendi ab, enim eveniet atque, hic magnam voluptatibus non
              excepturi quaerat sint quos, cumque voluptates rerum a omnis
              distinctio. Non, illo?
            </div>
          </Panel>
        </div>
        <div className="timeline-element-container">
          <div className="ball"></div>
          <Panel
            bannerColor="var(--col-primary)"
            mainColor="var(--col-box-primary)"
            title={<div>Chevron</div>}
            bottom={false}
          >
            {" "}
            <div>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
              eligendi ab, enim eveniet atque, hic magnam voluptatibus non
              excepturi quaerat sint quos, cumque voluptates rerum a omnis
              distinctio. Non, illo?
            </div>
          </Panel>
        </div>
      </div>
    </div>
  );
};

export default Experience;
