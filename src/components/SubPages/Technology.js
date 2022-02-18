import java from "../../images/java.svg";
import python from "../../images/python.svg";
import c from "../../images/c.svg";
import csharp from "../../images/csharp.svg";
import css from "../../images/css.svg";
import git from "../../images/git.svg";
import azure from "../../images/azure.svg";
import html5 from "../../images/html5.svg";
import javascript from "../../images/javascript.svg";
import react from "../../images/react.svg";
import unity from "../../images/unity.svg";

const Technology = ({ name }) => {
  const map = {
    java: java,
    python: python,
    c: c,
    csharp: csharp,
    css: css,
    git: git,
    azure: azure,
    html5: html5,
    javascript: javascript,
    react: react,
    unity: unity,
  };

  return (
    <div>
      <img
        style={{ height: "100px" }}
        src={map[name]}
        alt={name + " icon"}
        className="icon"
      />
      <p style={{ textAlign: "center" }}>{name}</p>
    </div>
  );
};

export default Technology;
