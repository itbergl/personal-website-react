const bannerTitle = {
    color: 'Orange'
}


const Footer = ({dim, color}) => {

    const css = {
        color: "black",
        backgroundColor: color,
        marginTop: "0px",
        bottom: 0,
        height: dim["footerHeight"],
        position: "fixed",
        width: "100%"
    }

  return (
    <div className="bottom-banner" style={css}>
        <h1>Contact Info</h1>
    </div>

  )
}

export default Footer