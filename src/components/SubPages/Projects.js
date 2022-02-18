import Panel from "./Panel";

const Projects = ({ showOverlay }) => {
  return (
    <div>
      <div className="title-panel-container">
        <Panel
          titlePanel
          bannerColor="var(--col-primary)"
          title={<div className="page-title">Projects</div>}
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
      <div className="panel-grid">
        <Panel
          title={<div className="page-title">Projects</div>}
          content={
            <div className="panel-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              quod incidunt facere optio! Exercitationem libero eos corporis at.
              Est fuga exercitationem debitis itaque alias adipisci eos
              repudiandae temporibus quos animi!
            </div>
          }
          onClick={() =>
            showOverlay(<Panel title={<div>Hello There</div>}></Panel>)
          }
        ></Panel>
        <Panel
          title={<div className="page-title">Projects</div>}
          content={
            <div className="panel-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              quod incidunt facere optio! Exercitationem libero eos corporis at.
              Est fuga exercitationem debitis itaque alias adipisci eos
              repudiandae temporibus quos animi!
            </div>
          }
          onClick={() =>
            showOverlay(<Panel title={<div>Hello There</div>}></Panel>)
          }
        ></Panel>
      </div>
    </div>
  );
};

export default Projects;