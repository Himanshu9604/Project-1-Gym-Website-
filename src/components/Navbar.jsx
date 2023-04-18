import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.header}>
      <NavLink to="/" className={styles.home}>
        Home
      </NavLink>
      <NavLink to="/about" className={styles.About}>
        {" "}
        About
      </NavLink>
      <NavLink to="/blogs" className={styles.Blogs}>
        Blogs
      </NavLink>
      <NavLink to="/classes" className={styles.Classes}>
        Classes
      </NavLink>
      <NavLink to="/pricing" className={styles.Pricing}>
        Pricing
      </NavLink>
      <NavLink to="/joinus" className={styles.JoinUs}>
        {" "}
        <button className={styles.button}>JoinUs</button>
      </NavLink>
    </div>
  );
}

export default Navbar;
