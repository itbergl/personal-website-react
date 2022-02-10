


const Header = ({dim, color}) => {

    const css =  {
        color: "red",
        backgroundColor: color,
        marginTop: "0px",
        height: dim["bannerHeight"],
        position: "fixed",
        width: "100%"
    }

  return (
    <div style = {css} className="top-banner">
        <h1>IsaacBergl.com</h1>
    </div>

  )
}

export default Header