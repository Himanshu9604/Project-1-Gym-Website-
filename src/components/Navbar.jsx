import React from "react";
import { NavLink } from "react-router-dom";
// <<<<<<< HEAD
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
      {/* // ======= import Styles from "./Navbar.module.css"; */}
      {/* 
function Navbar() {
  return (
    <div className={Styles.navbar}>
      <ul style={{ listStyleType: "none" }}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/blogs">Blogs</NavLink>
        </li>
        <li>
          <NavLink to="/classes">Classes</NavLink>
        </li>
        <li>
          <NavLink to="/joinus">JoinUs</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/login"> Login</NavLink>
        </li>
      </ul>*/}
      {/* >>>>>>> origin/login-pages */}
    </div>
  );
}

export default Navbar;
