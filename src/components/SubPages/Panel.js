import PropTypes from "prop-types";

// maybe remove width
const Panel = ({
  children,
  title,
  footer,
  width,
  height,
  bannerColor,
  mainColor,
  titlePanel,
  padMain,
  horizontal,
  onClick,
  scrollable,
}) => {
  const radius = "20px";

  const cssMain = {
    width: "100%",
  };

  const cssHeader = horizontal
    ? {
        borderTopLeftRadius: radius,
        borderBottomLeftRadius: radius,
        paddingRight: 0,
      }
    : { borderTopLeftRadius: radius, borderTopRightRadius: radius };

  const cssFooter = horizontal
    ? {
        borderTopRightRadius: radius,
        borderBottomRightRadius: radius,
        paddingLeft: 0,
        paddingRight: 0,
      }
    : {
        borderBottomLeftRadius: radius,
        borderBottomRightRadius: radius,
        paddingBottom: 0,
        paddingTop: 0,
      };

  cssFooter.padding = radius;
  cssHeader.padding = radius;

  // this probably isn't best practice
  if (titlePanel) {
    cssHeader.paddingBottom = radius;
    cssHeader.alignContent = "center";
  }

  if (scrollable) {
    cssMain.overflowY = "scroll";
  }

  cssHeader.backgroundColor = bannerColor;
  cssMain.backgroundColor = mainColor;
  cssFooter.backgroundColor = bannerColor;

  return (
    <div
      className={"panel" + (onClick ? " clickable" : "")}
      style={{
        width: width,
        height: height,
        margin: "auto",
        flexDirection: horizontal ? "row" : "column",
      }}
      onClick={onClick}
    >
      <div className="unselectable-text" style={cssHeader}>
        {title}
      </div>
      <div style={cssMain}>
        <div style={{ padding: padMain ? radius : 0 }}>{children}</div>
      </div>
      {footer ? <div style={cssFooter}> {footer}</div> : null}
    </div>
  );
};

Panel.defaultProps = {
  title: <></>,
  footer: undefined,
  width: "100%",
  bannerColor: "var(--col-box-primary)",
  mainColor: "var(--col-box-secondary)",
  height: "auto",
  padMain: true,
  titlePanel: false,
  horizontal: false,
  onClick: null,
  scrollable: false,
};

Panel.propTypes = {
  title: PropTypes.element,
  // footer: PropTypes.element,
  width: PropTypes.string,
  bannerColor: PropTypes.string,
  mainColor: PropTypes.string,
  padMain: PropTypes.bool,
  titlePanel: PropTypes.bool,
  horizontal: PropTypes.bool,
  onClick: PropTypes.func,
  scrollable: PropTypes.bool,
  height: PropTypes.string,
};

export default Panel;
