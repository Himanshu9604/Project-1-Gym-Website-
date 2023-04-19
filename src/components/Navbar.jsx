import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Styles from "./Navbar.module.css";

function Navbar() {
  const navigate = useNavigate();
  function handleNavigation() {
    navigate("/joinus");
  }

  return (
    <div className={Styles.navbar}>
      <div
        style={{
          fontSize: "40px",
          color: "red",
          fontWeight: "bolder",
          cursor: "pointer",
        }}
      >
        <span style={{ fontSize: "30px" }}>.</span>
        <NavLink to="/" style={{ color: "red", textDecoration: "none" }}>
          GYM
        </NavLink>
      </div>

      <div>
        <ul style={{ listStyleType: "none" }}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>

          <li>
            <NavLink to="/pricing">Pricing</NavLink>
          </li>
          <li>
            <NavLink to="/training">Training</NavLink>
          </li>
        </ul>
      </div>
      <div>
        <button className={Styles.joinUSBtn} onClick={handleNavigation}>
          JoinUS
        </button>
      </div>
    </div>
  );
}

export default Navbar;
