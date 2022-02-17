import Panel from "./Panel";

import profilePic from "../../images/profile.jpg";
import React, { useState } from "react";
import Technology from "./Technology";
import piderman from "../../images/piderman.gif";

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

{
  /* <img
  src={profilePic}
  alt={"profile"}
  loading="lazy"
  className="profile-picture"
  onLoad={() => setLoaded(true)}
  style={loaded ? {} : { visibility: "hidden" }}
></img> */
}

const Home = () => {
  // const [loaded, setLoaded] = useState(false);

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
              title={<div className="page-title">About Me</div>}
              content={
                <div style={{ display: "flex", columnGap: "30px" }}>
                  <div className="panel-text panel-padding">
                    <p>
                      Hi I'm Isaac, I'm an aspiring software engineer from
                      Perth, Western Australia, with internship experience.
                    </p>

                    <p>
                      I have an undergraduate degree in Computer Science, with a
                      second major in applied and pure mathematics and I am
                      doing my honours year in 2022 about convolutionary neural
                      networks for detecting the presence of small objects in
                      images.
                    </p>

                    <p>
                      In my spare time I enjoy doing coding projects and playing
                      music.
                    </p>

                    <p>Feel free to explore my webpage!</p>
                  </div>
                </div>
              }
              bottom={false}
              titlePanel={true}
            />
          </div>
          <div style={{ gridRow: "1/2", gridColumn: "3/5" }}>
            <Panel
              title={<div className="page-title">Experience</div>}
              content={
                <div className="panel-text panel-padding">
                  <p>
                    I have completed a software engineering internship with
                    Chevron in 2022, where I gained exposure to cloud
                    engineering using Azure. The program was 12 weeks and I
                    gained many skills such as communication, working with a
                    large team and working on an agile project.
                  </p>
                  <p>
                    Additionally I did a research project with Dr Zeyi Wen about
                    the robustness of decision tree based machine learning
                    models, looking at the model's effectiveness when presented
                    with intentionally altered images. You can read my
                    literature review here.
                  </p>
                  <p>
                    I do coding projects in my spare time, which you can check
                    out here!
                  </p>
                </div>
              }
              bottom={false}
            />
          </div>
          <div style={{ gridRow: "2/3", gridColumn: "2/4" }}>
            <Panel
              title={<div className="page-title">Technical Skills</div>}
              content={
                <div className="technology-home-grid">
                  {technologies.map((tech) => (
                    <Technology key={tech} name={tech} />
                  ))}
                </div>
              }
              bottom={false}
            />
          </div>

          <div style={{ gridRow: "3/4", gridColumn: "2/4" }}>
            <Panel
              title={<div className="page-title">Education</div>}
              content={
                <div className="panel-text panel-padding">
                  <ul>
                    <li>
                      <h3>University of Western Australia</h3>
                      <p>
                        Computer Science and Mathematics with Honours (Bachelor
                        of Philosophy)
                      </p>
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
                      <p>GPA: 6.692</p>{" "}
                      <p>Weighted Average Mark (WAM): 83.192</p>
                      <h4>Computer Science</h4>
                      <ul>
                        <li>Systems Programming</li>
                        <li>Data Structures and algorithms</li>
                        <li>Cyber-Security</li>
                        <li>Networks</li>
                        <li>Computer Graphics</li>
                        <li>Professional Computing</li>
                        <li>Databases</li>
                      </ul>
                      <h4>Mathematics</h4>
                      <ul>
                        <li>Optimisation</li>
                        <li>Networks and Graph Theory</li>
                        <li>Complex Systems</li>
                        <li>Discrete Structures</li>
                        <li>Symmetry and Group Theory</li>
                        <li>Multivariable Calculus</li>
                        <li>Linear Algebra</li>
                        <li>Statistics</li>
                      </ul>
                      <h4>Physics</h4>
                      <ul>
                        <li>Quantum Mechanics</li>
                        <li>Quantum Thermodynamics</li>
                        <li>Electrodynamics</li>
                        <li>Particle Physics</li>
                        <li>Newtonian Mechanics</li>
                        <li>Astronomy</li>
                      </ul>
                    </li>
                    <li>
                      <h3>Churchlands Senior High School</h3>
                      <p>
                        Graduated in 2018 doing ATAR; Specialist Maths, Methods
                        Maths, Physics, Chemistry and English.
                      </p>
                      <ul>
                        <li>Achieved an ATAR of 98.5</li>
                        <li>
                          Achieved Young Engineers Award for outstanding
                          performance across STEM subjects
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              }
              bottom={false}
            />
          </div>

          <Panel
            title={<div className="page-title">About this website</div>}
            bottom={false}
            content={
              <div className="panel-text panel-padding">
                <p>
                  This webpage was built using react.js a framework for
                  interactive web applications. This was my first time using
                  this framework.
                </p>
                <p>
                  You can check out the source code{" "}
                  <a href="https://github.com/itbergl/personal-website-react">
                    here
                  </a>
                </p>
                <div style={{ left: "50%", margin: "auto", width: "200px" }}>
                  <img src={piderman} alt="this slowpoke moves" width="200" />
                </div>
                <p style={{ textAlign: "center" }}>
                  Above is a gif of Spiderman dancing.
                </p>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
