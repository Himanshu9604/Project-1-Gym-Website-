import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/blogs">Blogs</NavLink>
      <NavLink to="/trainer">Trainer</NavLink>
      <NavLink to="/joinus">JoinUs</NavLink>
      <NavLink to="/pricing">Pricing</NavLink>
      
      
    </div>
  );
}

export default Navbar;
