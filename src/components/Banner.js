import { Link } from "react-router-dom";

const Header = ({ bannerHeight, selectedPage, setSelectedPage }) => {
  const css = {
    height: bannerHeight,
  };

  return (
    <div style={css} className="banner">
      <div style={{ display: "flex", gap: "0px" }}>
        <div>
          <Link to="/home" style={{ textDecoration: "none" }}>
            <h1
              className="unselectable-text banner-text banner-text-selected"
              onClick={() => setSelectedPage("/home")}
            >
              IsaacBergl
              <span style={{ color: "var(--col-banner-text)" }}>.com</span>{" "}
              software engineer
            </h1>
          </Link>
        </div>
        <div className="banner-line"></div>
      </div>
      <div>
        <Link to="/home" style={{ textDecoration: "none" }}>
          <h1
            className={
              "unselectable-text banner-text " +
              (selectedPage === "/home" ? "banner-text-selected" : "")
            }
            onClick={() => setSelectedPage("/home")}
          >
            home
          </h1>
        </Link>
      </div>
      <div>
        <Link to="projects" style={{ textDecoration: "none" }}>
          <h1
            className={
              "unselectable-text banner-text " +
              (selectedPage === "/projects" ? "banner-text-selected" : "")
            }
            onClick={() => setSelectedPage("/projects")}
          >
            projects
          </h1>
        </Link>
      </div>
      <div>
        <Link to="contact" style={{ textDecoration: "none" }}>
          <h1
            className={
              "unselectable-text banner-text " +
              (selectedPage === "/contact" ? "banner-text-selected" : "")
            }
            onClick={() => setSelectedPage("/contact")}
          >
            contact
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default Header;
