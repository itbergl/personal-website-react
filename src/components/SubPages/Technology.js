import java from "../../images/java.svg";

import python from "../../images/python.svg";
import pandas from "../../images/pandas.png";
import numpy from "../../images/numpy.svg";
import pytorch from "../../images/pytorch.svg";
import matplotlib from "../../images/matplotlib.svg";

import c from "../../images/c.svg";
import csharp from "../../images/csharp.svg";
import css from "../../images/css.svg";
import git from "../../images/git.svg";
import azure from "../../images/azure.svg";
import html5 from "../../images/html5.svg";
import javascript from "../../images/javascript.svg";
import react from "../../images/react.svg";
import unity from "../../images/unity.svg";

const Technology = ({ children, name, height, label }) => {
  const map = {
    java: {
      object: java,
      name: "Java",
    },
    
    python: {
        object: python,
        name: "Python",
      },
    pandas: {
      object: pandas,
      name: "Pandas",
    },

    numpy: {
      object: numpy,
      name: "Numpy",
    },

    pytorch: {
      object: pytorch,
      name: "Pytorch",
    },

    matplotlib: {
      object: matplotlib,
      name: "Matplotlib",
    },
    c: {
      object: c,
      name: "C",
    },
    csharp: {
      object: csharp,
      name: "C#",
    },
    css: {
      object: css,
      name: "CSS",
    },
    git: {
      object: git,
      name: "Git",
    },
    azure: {
      object: azure,
      name: "Azure",
    },
    html5: {
      object: html5,
      name: "HTML 5",
    },
    javascript: {
      object: javascript,
      name: "JavaScript",
    },
    react: {
      object: react,
      name: "React.js",
    },
    unity: {
      object: unity,
      name: "Unity",
    },
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <img
        style={{
          height: height,
        }}
        src={map[name]["object"]}
        alt={map[name]["name"] + " icon"}
        className={"icon" + (name === "unity" ? " unity" : "")}
      />
      {children}
      {label ? (
        <p style={{ textAlign: "center" }}>{map[name]["name"]}</p>
      ) : null}
    </div>
  );
};

export default Technology;
