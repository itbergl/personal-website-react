import Home from "./SubPages/Home";
import Projects from "./SubPages/Projects";
import Experience from "./SubPages/Experience";
import Contact from "./SubPages/Contact";

//  TODO set min and max sizes for project panels
const Content = ({ bannerHeight, selectedPage }) => {
  const getPage = () => {
    switch (selectedPage) {
      case "Home":
        return <Home />;
      case "Projects":
        return <Projects />;
      case "Experience":
        return <Experience />;
      case "Contact":
        return <Contact />;
      default:
        return <></>;
    }
  };
  return (
    <div
      className="scroll-content"
      style={{
        top: bannerHeight,
        height: `calc(100vh - ${bannerHeight})`,
      }}
    >
      {getPage()}
    </div>
  );
};

export default Content;
