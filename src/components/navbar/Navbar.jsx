import "./Navbar.css"

function Navbar() {
  return (
    <div className="navbar">
      <div className="navcontainer">
        <span className="logo">booking app</span>
      <div className="navitems">
        <button className="navbutton">register</button>
        <button className="navbutton">login</button>
      </div>
      </div>
    </div>
  )
}

export default Navbar
