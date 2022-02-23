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

  const css = horizontal
    ? {
        borderTopRightRadius: footer ? radius : "",
        borderBottomRightRadius: footer ? radius : "",
        borderTopLeftRadius: radius,
        borderBottomLeftRadius: radius,
      }
    : {
        borderTopRightRadius: radius,
        borderBottomRightRadius: footer ? radius : "",
        borderTopLeftRadius: radius,
        borderBottomLeftRadius: footer ? radius : "",
      };

  css.width = width;
  css.height = height;
  css.margin = "auto";
  css.flexDirection = horizontal ? "row" : "column";
  css.overflow = "hidden";

  const cssHeader = {};
  const cssFooter = {};
  cssHeader.padding = radius;

  // this probably isn't best practice
  if (titlePanel) {
    cssHeader.paddingBottom = radius;
    cssHeader.alignContent = "center";
  }

  if (scrollable) {
  }

  cssHeader.backgroundColor = bannerColor;
  cssFooter.backgroundColor = bannerColor;

  return (
    <div
      className={"panel" + (onClick ? " clickable" : "")}
      style={css}
      onClick={onClick}
    >
      <div className="unselectable-text" style={cssHeader}>
        {title}
      </div>
      <div
        style={{
          backgroundColor: mainColor,
          overflowY: scrollable ? "scrollable" : "",
          padding: padMain ? radius : 0,
        }}
      >
        {children}
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
