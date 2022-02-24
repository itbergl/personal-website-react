import Panel from "./Panel";

import Technology from "./Technology";
import piderman from "../../images/piderman.gif";

import Experience from "./Experience";
import uwa from "../../images/uwa.png";
import cshs from "../../images/cshs.png";
const technologies = [
  "python",
  "javascript",
  "html5",
  "css",
  "c",
  "csharp",
  "java",
  "react",
  "git",
  "unity",
  "azure",
];

const Home = () => {
  return (
    <div>
      <div>
        <div className="home-title-display">
          <h1>Isaac Bergl</h1>
          <h2>Software Engineer</h2>
        </div>
        <div className="homepage-grid">
          <div style={{ gridRow: "1/2", gridColumn: "1/3" }}>
            <Panel
              bannerColor="var(--col-primary)"
              title={<div className="page-title">About Me</div>}
              titlePanel
            >
              <div style={{ display: "flex", columnGap: "30px" }}>
                <div className="panel-text panel-padding">
                  <p>
                    Hi I'm Isaac, I'm an aspiring software engineer from Perth,
                    Western Australia, with internship experience.
                  </p>
                  <p>
                    I have an undergraduate degree in Computer Science, with a
                    second major in applied and pure mathematics and I am doing
                    my honours year in 2022 about convolutionary neural networks
                    for detecting the presence of small objects in images.
                  </p>
                  <p>
                    In my spare time I enjoy doing coding projects and playing
                    music.
                  </p>

                  <p>
                    You can download my resume{" "}
                    <a
                      href={"documents/Resume 2022.pdf"}
                      download="Isaac Bergl Resume.pdf"
                      style={{ color: "var(--col-selected-text)" }}
                    >
                      here
                    </a>
                    .
                  </p>
                  <p>Feel free to explore my webpage!</p>
                </div>
              </div>
            </Panel>
          </div>
          <div style={{ gridRow: "1/2", gridColumn: "3/5" }}>
            <Panel
              bannerColor="var(--col-primary)"
              padMain={false}
              scrollable
              height={"50vh"}
              title={<div className="page-title">Experience</div>}
            >
              <Experience></Experience>
            </Panel>
          </div>
          <div style={{ gridRow: "2/3", gridColumn: "2/4" }}>
            <Panel
              bannerColor="var(--col-primary)"
              padMain
              title={<div className="page-title">Technical Skills</div>}
            >
              <div className="technology-home-grid">
                {technologies.map((tech) => (
                  <Technology
                    key={tech}
                    label
                    height="70px"
                    name={tech}
                  ></Technology>
                ))}
              </div>
            </Panel>
          </div>
          <div style={{ gridRow: "3/4", gridColumn: "2/4" }}>
            <Panel
              bannerColor="var(--col-primary)"
              padMain
              title={<div className="page-title">Education</div>}
            >
              {" "}
              <div
                className="panel-text panel-padding"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "10vh",
                }}
              >
                <div>
                  <ul>
                    <li>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "3fr 1fr",
                          gridAutoRows: "minContent",
                        }}
                      >
                        <div>
                          <h3>University of Western Australia</h3>
                          <p>
                            Computer Science and Mathematics with Honours
                            (Bachelor of Philosophy)
                          </p>
                        </div>

                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            width: "100%",
                          }}
                        >
                          <img
                            src={uwa}
                            alt="uwa logo"
                            style={{
                              objectFit: "contain",
                              width: "100px",
                              margin: "auto 0 auto 0",
                              // height: "200px",
                            }}
                          ></img>
                        </div>
                      </div>
                    </li>
                    <div>
                      <ul>
                        <li>
                          Bachelor of Philosophy is a selective degree for high
                          achieving ATAR students.
                        </li>
                        <li>
                          Averaged a high distiction across all units in my
                          undergraduate degree.
                        </li>
                        <li>
                          Commencing honours in computer vision and
                          convolutionary neural networks in 2022.
                        </li>
                      </ul>
                    </div>
                  </ul>
                  <div
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <p>GPA | 6.692</p>{" "}
                    <p>Weighted Average Mark (WAM) | 83.192</p>
                  </div>
                </div>
                <Panel
                  bannerColor="var(--col-primary)"
                  // mainColor="var(--col-box-primary)"
                  title={<div className="page-title">Computer Science</div>}
                  titlePanel
                  padMain
                >
                  <div className="technology-home-grid">
                    <div className="subject">
                      <h4>Systems Programming</h4>
                    </div>
                    <div className="subject">
                      <h4>Data Structures and Algorithms</h4>
                    </div>
                    <div className="subject">
                      <h4>Cyber-Security</h4>
                    </div>
                    <div className="subject">
                      <h4>Networks</h4>
                    </div>
                    <div className="subject">
                      <h4>Computer Graphics</h4>
                    </div>
                    <div className="subject">
                      <h4>Professional Computing</h4>
                    </div>
                    <div className="subject">
                      <h4>Databases</h4>
                    </div>
                  </div>
                </Panel>
                <Panel
                  bannerColor="var(--col-primary)"
                  // mainColor="var(--col-box-primary)"
                  title={<div className="page-title">Mathematics</div>}
                  titlePanel
                  padMain
                >
                  <div className="technology-home-grid">
                    <div className="subject">
                      <h4>Optimisation</h4>
                    </div>
                    <div className="subject">
                      <h4>Networks and Graph Theory</h4>
                    </div>
                    <div className="subject">
                      <h4>Complex Systems</h4>
                    </div>
                    <div className="subject">
                      <h4>Discrete Structures</h4>
                    </div>
                    <div className="subject">
                      <h4>Symmetry and Group Theory</h4>
                    </div>
                    <div className="subject">
                      <h4>Multivariable Calculus</h4>
                    </div>
                    <div className="subject">
                      <h4>Linear Algebra</h4>
                    </div>
                    <div className="subject">
                      <h4>Statistics</h4>
                    </div>
                  </div>
                </Panel>
                <Panel
                  bannerColor="var(--col-primary)"
                  // mainColor="var(--col-box-primary)"
                  title={<div className="page-title">Physics</div>}
                  titlePanel
                  padMain
                >
                  <div className="technology-home-grid">
                    <div className="subject">
                      <h4>Quantum Mechanics</h4>
                    </div>
                    <div className="subject">
                      <h4>Quantum Thermodynamics</h4>
                    </div>
                    <div className="subject">
                      <h4>Electrodynamics</h4>
                    </div>
                    <div className="subject">
                      <h4>Particle Physics</h4>
                    </div>
                    <div className="subject">
                      <h4>Newtonian Mechanics</h4>
                    </div>
                    <div className="subject">
                      <h4>Astronomy</h4>
                    </div>
                  </div>
                </Panel>
                <div>
                  <ul>
                    <li>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "3fr 1fr",
                          // gridAutoRows: "1fr",
                          // overflow: "hidden",
                          // maxHeight: "200px",
                          gridAutoRows: "minContent",
                        }}
                      >
                        <div>
                          <h3>Churchlands Senior High School</h3>
                          <p>
                            Graduated in 2018 doing ATAR; Specialist Maths,
                            Methods Maths, Physics, Chemistry and English.
                          </p>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            width: "100%",
                          }}
                        >
                          <img
                            src={cshs}
                            alt="cshs logo"
                            style={{
                              objectFit: "contain",
                              width: "100px",
                              margin: "auto 0 auto 0",
                              // height: "200px",
                            }}
                          ></img>
                        </div>
                      </div>

                      <ul>
                        <li>ATAR | 98.5</li>
                        <li>
                          {" "}
                          Achieved Young Engineers Award for outstanding
                          performance across STEM subjects
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </Panel>
          </div>
          <Panel title={<div className="page-title">About this website</div>}>
            {" "}
            <div
              className="panel-text panel-padding"
              style={{ textAlign: "center" }}
            >
              <p>
                This webpage was built using react.js: a javaScript framework
                for building interactive web applications. This was my first
                time using this framework.
              </p>
              <p style={{ textAlign: "center" }}>
                You can check out the source code{" "}
                <a href="https://github.com/itbergl/personal-website-react">
                  here
                </a>
                .
              </p>
              <div style={{ left: "50%", margin: "auto", width: "200px" }}>
                <img src={piderman} alt="this slowpoke moves" width="200" />
              </div>
              <p>Above is a gif of Spiderman dancing.</p>
            </div>
          </Panel>
        </div>
      </div>
    </div>
  );
};

export default Home;
