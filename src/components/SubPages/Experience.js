// import Panel from "./Panel";
import TimelineEvent from "./TimelineEvent";

const Experience = () => {
  const year = (year) => {
    return (
      <div className="year-label">
        <h3>{year}</h3>
      </div>
    );
  };

  return (
    <div>
      <div className="timeline">
        <div className="timeline-line"></div>
        {year("Today")}
        <TimelineEvent title={<div>Started JB HIFI</div>}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
          eligendi ab, enim eveniet atque, hic magnam voluptatibus non excepturi
          quaerat sint quos, cumque voluptates rerum a omnis distinctio. Non,
          illo?
        </TimelineEvent>
        {year("2022")}
        <div />
        <TimelineEvent title={<div>Started Chevron</div>}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
          eligendi ab, enim eveniet atque, hic magnam voluptatibus non excepturi
          quaerat sint quos, cumque voluptates rerum a omnis distinctio. Non,
          illo?
        </TimelineEvent>
        {year("2021")}
        <div />
        <TimelineEvent title={<div>Started QFIN</div>}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
          eligendi ab, enim eveniet atque, hic magnam voluptatibus non excepturi
          quaerat sint quos, cumque voluptates rerum a omnis distinctio. Non,
          illo?
        </TimelineEvent>

        <TimelineEvent title={<div>Research Project</div>}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
          eligendi ab, enim eveniet atque, hic magnam voluptatibus non excepturi
          quaerat sint quos, cumque voluptates rerum a omnis distinctio. Non,
          illo?
        </TimelineEvent>
        {year("2021")}
        <div />
        <TimelineEvent title={<div>Started IGA</div>}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
          eligendi ab, enim eveniet atque, hic magnam voluptatibus non excepturi
          quaerat sint quos, cumque voluptates rerum a omnis distinctio. Non,
          illo?
        </TimelineEvent>
        <TimelineEvent title={<div>Started University</div>}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
          eligendi ab, enim eveniet atque, hic magnam voluptatibus non excepturi
          quaerat sint quos, cumque voluptates rerum a omnis distinctio. Non,
          illo?
        </TimelineEvent>
        {year("2019")}
        <div />
        <TimelineEvent title={<div>Farmer Jacks</div>}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
          eligendi ab, enim eveniet atque, hic magnam voluptatibus non excepturi
          quaerat sint quos, cumque voluptates rerum a omnis distinctio. Non,
          illo?
        </TimelineEvent>
        <TimelineEvent title={<div>Graduated CSHS</div>}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
          eligendi ab, enim eveniet atque, hic magnam voluptatibus non excepturi
          quaerat sint quos, cumque voluptates rerum a omnis distinctio. Non,
          illo?
        </TimelineEvent>
        {year("2018")}
        <div />
        <TimelineEvent title={<div>Office Max</div>}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
          eligendi ab, enim eveniet atque, hic magnam voluptatibus non excepturi
          quaerat sint quos, cumque voluptates rerum a omnis distinctio. Non,
          illo?
        </TimelineEvent>
        {year("2016")}
        <div />
      </div>
    </div>
  );
};

export default Experience;
