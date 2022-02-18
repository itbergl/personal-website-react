import PropTypes from "prop-types";

// maybe remove width
const Panel = ({
  title,
  content,
  footer,
  width,
  bottom,
  titlePanel,
  isNoMain,
  bannerColor,
  mainColor,
  horizontal,
  onClick,
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

  cssHeader.backgroundColor = bannerColor;
  cssMain.backgroundColor = mainColor;
  cssFooter.backgroundColor = bannerColor;

  return (
    <div
      className={"panel" + (onClick === null ? "" : " clickable")}
      style={{
        width: width,
        margin: "auto",
        flexDirection: horizontal ? "row" : "column",
      }}
      onClick={onClick}
    >
      <div className="unselectable-text" style={cssHeader}>
        {title}
      </div>
      {isNoMain ? (
        <></>
      ) : (
        <div style={cssMain}>
          <div style={{ padding: radius, height: "100%" }}>{content}</div>
        </div>
      )}
      {bottom ? <div style={cssFooter}> {footer}</div> : null}
    </div>
  );
};

Panel.defaultProps = {
  title: <></>,
  content: <></>,
  footer: <></>,
  width: "100%",
  bottom: true,
  bannerColor: "var(--col-box-primary)",
  mainColor: "var(--col-box-secondary)",
  isNoMain: false,
  titlePanel: false,
  horizontal: false,
  onClick: null,
};

Panel.propTypes = {
  title: PropTypes.element,
  content: PropTypes.element,
  footer: PropTypes.element,
  width: PropTypes.string,
  bottom: PropTypes.bool,
  bannerColor: PropTypes.string,
  mainColor: PropTypes.string,
  isNoMain: PropTypes.bool,
  titlePanel: PropTypes.bool,
  horizontal: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Panel;
