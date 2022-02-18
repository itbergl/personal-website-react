import Panel from "./Panel";

const Experience = () => {
  return (
    <Panel
      bannerColor="var(--col-primary)"
      mainPadding={false}
      scrollable
      maxHeight={"50vh"}
      title={<div className="page-title">Experience</div>}
      content={
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
                content={
                  <div>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Natus eligendi ab, enim eveniet atque, hic magnam
                    voluptatibus non excepturi quaerat sint quos, cumque
                    voluptates rerum a omnis distinctio. Non, illo?
                  </div>
                }
                bottom={false}
              />
            </div>
            <div className="timeline-element-container">
              <div className="ball"></div>
              <Panel
                bannerColor="var(--col-primary)"
                mainColor="var(--col-box-primary)"
                title={<div>Chevron</div>}
                content={
                  <div>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Natus eligendi ab, enim eveniet atque, hic magnam
                    voluptatibus non excepturi quaerat sint quos, cumque
                    voluptates rerum a omnis distinctio. Non, illo?
                  </div>
                }
                bottom={false}
              />
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
                content={
                  <div>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Natus eligendi ab, enim eveniet atque, hic magnam
                    voluptatibus non excepturi quaerat sint quos, cumque
                    voluptates rerum a omnis distinctio. Non, illo?
                  </div>
                }
                bottom={false}
              />
            </div>
            <div className="timeline-element-container">
              <div className="ball"></div>
              <Panel
                title={<div>Chevron</div>}
                bannerColor="var(--col-primary)"
                mainColor="var(--col-box-primary)"
                content={
                  <div>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Natus eligendi ab, enim eveniet atque, hic magnam
                    voluptatibus non excepturi quaerat sint quos, cumque
                    voluptates rerum a omnis distinctio. Non, illo?
                  </div>
                }
                bottom={false}
              />
            </div>
          </div>
        </div>
      }
      bottom={false}
    />
  );
};

export default Experience;
