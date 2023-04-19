import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Styles from "./Navbar.module.css";
import { AiOutlineBars } from "react-icons/ai";

function Navbar() {
  const navigate = useNavigate();
  const linkRef = React.useRef();
  const property = React.useRef("none");

  function handleNavigation() {
    navigate("/joinus");
  }

  const handleLinks = () => {
    console.log(linkRef.current.style.display);
    const tempData = property.current == "none" ? "flex" : "none";

    linkRef.current.style.display = tempData;
    property.current = tempData;
  };

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
        <NavLink
          to="/"
          id={Styles.logo}
          style={{ color: "red", textDecoration: "none" }}
        >
          GYM
        </NavLink>
      </div>

      <div>
        <ul style={{ listStyleType: "none" }} ref={linkRef}>
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
      <div onClick={handleLinks} className={Styles.navIcon}>
        <AiOutlineBars fontSize={30} color="white" />
      </div>
    </div>
  );
}

export default Navbar;
