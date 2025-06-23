import React from "react";
import "./Navbar.css"

function Navbar(){
    return(
        <div className="navbar">
        <div className="navbar-logo">My Health App</div>
      <div className="navbar-links">
        <a href="#">Home</a>
        <a href="#">Detect</a>
        <a href="#">Research</a>
        <a href="#">About Us</a>
      </div>
        </div>
    );
}
export default Navbar;