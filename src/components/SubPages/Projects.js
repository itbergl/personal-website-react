import Panel from "./Panel";
import Project from "./Project";

const Projects = ({ showOverlay }) => {
  return (
    <div>
      <div className="title-panel-container">
        <Panel
          titlePanel
          bannerColor="var(--col-primary)"
          title={<div className="page-title">Projects</div>}
        >
          <div className="panel-text" style={{ textAlign: "center" }}>
            Here's a list of all my projects. Click on the GitHub icon to view
            each repository.
          </div>
        </Panel>
      </div>
      <div className="panel-grid">
        <Project
          name="Pathfinder"
          technologies={["python"]}
          repo="https://github.com/itbergl/pathfinding"
        >
          A visual implementation of A* pathfinding, an informed search
          algorithm for finding the shortest path between two nodes of a
          weighted graph. It also includes an interactive map canvas.
        </Project>

        <Project
          name="Sodoku Solver"
          technologies={["python"]}
          repo="https://github.com/itbergl/sodoku"
        >
          Created a sodoku player with a solver that utilises a recursive
          backtracking algorithm to demonstrate visually how such an algorithm
          works.
        </Project>
        <Project
          name="Terminal Donut"
          technologies={["c"]}
          repo="https://github.com/itbergl/terminal-donut"
        >
          Created a C program that simulates a 3D rotating donut and displays a
          rendering to the terminal usinh ASCII symbols to represent brightness.
        </Project>

        <Project
          name="Particle Simulator"
          technologies={["csharp", "unity"]}
          repo="https://github.com/SmallMolecules/small-molecules"
        >
          Created a 3D particle simulator that can simulate 100s of particles in
          an interactive Unity environment for mixed reality application. Gave
          developers the framework to implement their own collision event
          handling and custom force fields.
        </Project>

        <Project
          name="Wood Hackathon"
          technologies={["javascript", "html5", "css"]}
          repo="https://github.com/cookies-xor-cream/wood-hackathon-2021"
        >
          Won first place in a Hackathon by engineering consulting company Wood.
          Worked in a team of 4 to create an interactive web app in 24 hours
          that can help drive decisions about carbon emissions.
        </Project>
        <Project
          name="Poker Pot Cacluator"
          technologies={["javascript", "html5", "css"]}
          repo="https://github.com/itbergl/pot-splitter-web"
        >
          Made a website for calculating the results of a poker hand, and how a
          pot should be split when there is complicated betting.
        </Project>
        <Project
          name="3D Boids"
          technologies={["python"]}
          repo="https://github.com/itbergl/swarm"
        >
          Created a 3D boid simulator as described in a paper by Iain D. Couzin
          et al -
          <a
            href={
              "https://www.sciencedirect.com/science/article/abs/pii/S0022519302930651"
            }
            target="_blank"
            rel="noreferrer"
          >
            Collective Memory and Spatial Sorting in Animal Groups
          </a>
          .{" "}
          <p>
            The purpose of this paper was to model the behaviour of swarming
            animals like fish, birds and insects using various zones of
            attraction, repulsion, allignment and blindness for each agent.
          </p>
        </Project>
        <Project
          name="Personal Website"
          technologies={["javascript", "react", "html5", "css"]}
          repo="https://github.com/itbergl/personal-website-react"
        >
          This website was made using React - a powerful Javascript library for
          creating interactive front end websites. This was my first time using
          this framework.
        </Project>
      </div>
    </div>
  );
};

export default Projects;
