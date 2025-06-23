import React from "react";
import { Route, Routes, Link } from "react-router-dom"
import "./Navbar.css"

function Navbar(){
    return(
        <div className="navbar">
        <div className="navbar-logo">My Health App</div>
      <div className="navbar-links">
      <Link to="/">Home</Link>
      <Link to="/upload">Detect</Link>
      <Link to="/research">Research</Link>
      <Link to="/about">About us</Link>
      </div>
        </div>
    );
}
export default Navbar;