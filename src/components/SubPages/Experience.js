// import Panel from "./Panel";
import TimelineEvent from "./TimelineEvent";
import { FaFileDownload } from "react-icons/fa";

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
        {/* <TimelineEvent title={<div>Started JB HIFI</div>}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
          eligendi ab, enim eveniet atque, hic magnam voluptatibus non excepturi
          quaerat sint quos, cumque voluptates rerum a omnis distinctio. Non,
          illo?
        </TimelineEvent> */}
        
            
        <TimelineEvent
          title="QFIN"
          position="Director of Trading"
          time="Oct 2022 - Present"
        >
          Voted into executive position as Director of Trading at QFIN to design and
          implement a software for traders to build custom algorithms, manage teams of traders
          and run educational workshops on coding.
        </TimelineEvent>
        
        
            
        <TimelineEvent
          title="UWA / DSTG"
          position="Honours in Machine Learning"
          time="Feb 2022 - Nov 2022"
        >
          Worked with the Defencse Science Technology Group (DSTG) to research and train state-of-the-art
          machine learning models for the detection of small objects in videos as my Honours dissertation. I produced results
          for the university and the DSTG that earned first class honours.
        </TimelineEvent>
        <TimelineEvent
          title="JB HI-FI"
          position="Sales Assistant"
          time="Feb 2022 - Present"
        >
          Started casual work at JB HI-FI to build professional skills.
        </TimelineEvent>
        <div />
        
        {year("2022")}
        
        <TimelineEvent
          title="Chevron"
          position="Software Engineer Intern"
          time="Nov 2020 - Feb 2021"
        >
          Worked as a software engineer intern over Chevron's Horizon Vacation
          program. I worked with technologies such as .NET core, Azure and Unity
          to engineer a data pipeline from on-site sensor data to an extranet
          client. Developed skills such as working collaboratively in a team,
          communication and working on an agile project.
        </TimelineEvent>
        {year("2021")}
        <div />
        <TimelineEvent
          title="QFIN"
          position="Trading Team Member"
          time="Apr 2021 - Oct 2022"
        >
          QFIN - Quantitative Finance - is a UWA club that aims to share
          knowledge and educate about quantivative finance - a branch of finance
          that uses mathemtatics and data science to make trading decisions. I
          joined the club as a trading team member, where I work in a team to
          create and report on new trading algorithms for the club to publish.
        </TimelineEvent>

        <TimelineEvent
          title="Particle Simulator Project"
          time="Jun 2021 - Nov 2021"
        >
          Worked in a team of software engineering students to deliver a 3D
          particle simulator for a researcher at UWA. We worked using an agile
          framework to regulary engage with stakeholders.
        </TimelineEvent>

        <TimelineEvent
          title="Research Project"
          position="Machine Learning Robustness"
          time="Dec 2020 - Jan 2021"
        >
          Worked with researcher Dr Zeyi Wen to critically analyse frontier
          research into the robustness verifcation of tree-based ensemble
          machine learning models.{" "}
          <p>
            You can download my report{" "}
            <FaFileDownload size="13px" color="white" />{" "}
            <a
              href={"documents/Literature Review.pdf"}
              download="Robustness Verification Problem for Tree Ensembles.pdf"
              style={{ color: "var(--col-selected-text)" }}
            >
              here
            </a>
            .
          </p>
        </TimelineEvent>
        {year("2021")}
        <div />
        <TimelineEvent
          title="IGA"
          position="casual employment"
          time="Apr 2019 - Nov 2021"
        >
          Started part time work at a local IGA.
        </TimelineEvent>
        <TimelineEvent
          title="Started University"
          position="Univserity of Western Australia (UWA)"
          time="Feb 2019 - Present"
        >
          Started my degree at UWA where I enrolled in a Bachelor of Philosophy
          - a highly selective degree for high achieving high school students.
          My original major was in Physics and Engineering however I
          transitioned to Computer Science and Mathematics after 2 years as it
          alligned with my passions more. I start my honours project this year.
        </TimelineEvent>
        {year("2019")}
        <div />

        <TimelineEvent
          title="Graduated HighSchool"
          position="Churchlands Senior High School"
          time="Feb 2014 - Nov 2018"
        >
          Graduated from Churchlands Senior High School with an ATAR of 98.5. I
          was also the recipient of the Young Engineers Award for outstanding
          performance across STEM subjects.
        </TimelineEvent>
        {year("2018")}
        <div />
        <TimelineEvent
          title="Office Max"
          position="casual employment"
          time="Dec 2016 - Jan 2017"
        >
          {" "}
          My first job! I worked a summer job at Office Max stocking shelves for
          the back-to-school period.
        </TimelineEvent>
        {year("2016")}
        <div />
      </div>
    </div>
  );
};

export default Experience;
