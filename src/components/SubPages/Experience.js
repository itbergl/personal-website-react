import Panel from "./Panel";

const Experience = () => {
  return (
    <div>
      <div className="title-panel-container">
        <Panel
          titlePanel={true}
          title={<div className="page-title">Experience</div>}
          content={
            <div className="panel-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              quod incidunt facere optio! Exercitationem libero eos corporis at.
              Est fuga exercitationem debitis itaque alias adipisci eos
              repudiandae temporibus quos animi!
            </div>
          }
          bottom={false}
          // change this
        ></Panel>
      </div>
      <div className="timeline">
        <div className="timeline-element-container">
          <div className="ball"></div>
          <Panel
            title={<div>Chevron</div>}
            content={
              <div>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
                eligendi ab, enim eveniet atque, hic magnam voluptatibus non
                excepturi quaerat sint quos, cumque voluptates rerum a omnis
                distinctio. Non, illo?
              </div>
            }
            bottom={false}
          />
        </div>
        <div className="timeline-element-container">
          <div className="ball"></div>
          <Panel
            title={<div>Chevron</div>}
            content={
              <div>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
                eligendi ab, enim eveniet atque, hic magnam voluptatibus non
                excepturi quaerat sint quos, cumque voluptates rerum a omnis
                distinctio. Non, illo?
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
            title={<div>Chevron</div>}
            content={
              <div>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
                eligendi ab, enim eveniet atque, hic magnam voluptatibus non
                excepturi quaerat sint quos, cumque voluptates rerum a omnis
                distinctio. Non, illo?
              </div>
            }
            bottom={false}
          />
        </div>
        <div className="timeline-element-container">
          <div className="ball"></div>
          <Panel
            title={<div>Chevron</div>}
            content={
              <div>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
                eligendi ab, enim eveniet atque, hic magnam voluptatibus non
                excepturi quaerat sint quos, cumque voluptates rerum a omnis
                distinctio. Non, illo?
              </div>
            }
            bottom={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
