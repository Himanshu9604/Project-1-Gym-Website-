import React, { useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Styles from "./Navbar.module.css";
import { AiOutlineBars } from "react-icons/ai";

function Navbar() {
  const navigate = useNavigate();
  const linkRef = React.useRef();
  const joinusRef = React.useRef();
  const property = React.useRef("none");

  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location]);

  function handleNavigation() {
    navigate("/joinus");
  }

  const handleLinks = () => {
    console.log(linkRef.current.style.display);
    const tempData = property.current == "none" ? "flex" : "none";

    linkRef.current.style.display = tempData;
    joinusRef.current.style.display = tempData;
    property.current = tempData;
  };

  return (
    <div className={Styles.navbar}>
      <div
        style={{
          fontSize: "-5px",

          fontWeight: "bolder",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        <NavLink
          to="/"
          id={Styles.logo}
          style={{ color: "red", textDecoration: "none" }}
        >
          <div
            style={{
              overflow: "hidden",
              width: "fit-content",
              height: "70px",
              borderRadius: "35px",
            }}
          >
            <img
              style={{ height: "50px", width: "50px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvUgRSTrSvBZaUeVJCKD13ED2dkEdPd0fJrjCiA5nDAI7-LyktdhkosBap8yHQg47xpw0&usqp=CAU"
            />
          </div>
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
          <li>
            <NavLink to="/contactus">Contact Us</NavLink>
          </li>
        </ul>
      </div>
      <div>
        <button
          className={Styles.joinUSBtn}
          ref={joinusRef}
          onClick={handleNavigation}
        >
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
