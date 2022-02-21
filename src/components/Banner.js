const Header = ({ bannerHeight, selectedPage, setPage }) => {
  const css = {
    height: bannerHeight,
  };
  return (
    <div style={css} className="banner">
      <div style={{ display: "flex", gap: "0px" }}>
        <div>
          <h1
            className="unselectable-text banner-text banner-text-selected"
            onClick={() => setPage("Home")}
          >
            IsaacBergl
            <span style={{ color: "var(--col-banner-text)" }}>.com</span>{" "}
            software engineer
          </h1>
        </div>
        <div className="banner-line"></div>
      </div>
      <div>
        <h1
          className={
            "unselectable-text banner-text " +
            (selectedPage === "Home" ? "banner-text-selected" : "")
          }
          onClick={() => setPage("Home")}
        >
          home
        </h1>
      </div>
      <div>
        <h1
          className={
            "unselectable-text banner-text " +
            (selectedPage === "Projects" ? "banner-text-selected" : "")
          }
          onClick={() => setPage("Projects")}
        >
          projects
        </h1>
      </div>
      <div>
        <h1
          className={
            "unselectable-text banner-text " +
            (selectedPage === "Contact" ? "banner-text-selected" : "")
          }
          onClick={() => setPage("Contact")}
        >
          contact
        </h1>
      </div>
    </div>
  );
};

export default Header;
