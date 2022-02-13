import PropTypes from 'prop-types'


const Panel = ({title, content, footer,  width, bottom, titlePanel, horizontal, onClick}) => {
    const radius = "20px";


    const cssMain = {
        padding: radius,
    }

    const cssHeader  = (horizontal? {
        borderTopLeftRadius: radius,
        borderBottomLeftRadius: radius,
        paddingRight: 0,
    }:{borderTopLeftRadius:  radius,
        borderTopRightRadius:  radius,
        paddingBottom:  0})
 
    const cssFooter = (horizontal? {
        borderTopRightRadius : radius,
        borderBottomRightRadius : radius,
        paddingLeft: 0,
        paddingRight : 0,
    }:{
        borderBottomLeftRadius : radius,
        borderBottomRightRadius : radius,
        paddingBottom : 0,
        paddingTop : 0,
    })

    cssFooter.padding = radius;
    cssHeader.padding = radius;

    // this probably isn't best practice
    if (titlePanel) {
        cssFooter.backgroundColor = "var(--col-primary)";
        cssHeader.backgroundColor = "var( --col-primary)";
        cssMain.backgroundColor = "var(--col-box-secondary)";
    }

  return (
    <div className="panel" style={{width: width, flexDirection: (horizontal? "row": "column")}} onClick={onClick}>
        <div className = "panel-header" style={cssHeader}>
            {title}
        </div>
        <div className = "panel-content" style={cssMain}>
            <div style={{padding: radius}}>{content}</div>
        </div>
        {bottom?
            <div className = "panel-footer" style={cssFooter}> {footer}</div>
        : null}

    </div>
  )
}

Panel.defaultProps = {
    title: <></>,
    content: <></>,
    footer: <></>,
    width: "auto",
    bottom: true,
    titlePanel: false,
    horizontal: false,
    onClick: null

}

Panel.propTypes = {
    title: PropTypes.element,
    content: PropTypes.element,
    footer: PropTypes.element,
    width: PropTypes.string,
    bottom: PropTypes.bool,
    titlePanel: PropTypes.bool,
    horizontal: PropTypes.bool,
    onClick: PropTypes.func
}

export default Panel