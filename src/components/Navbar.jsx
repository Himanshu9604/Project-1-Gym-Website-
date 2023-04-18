// import React from "react";
// import { NavLink } from "react-router-dom";

// function Navbar() {
//   return (
//     <div>
//       <NavLink to="/">Home</NavLink>
//       <NavLink to="/about">About</NavLink>
//       <NavLink to="/blogs">Blogs</NavLink>
//       <NavLink to="/training">Training</NavLink>
//       <NavLink to="/joinus">JoinUs</NavLink>
//       <NavLink to="/pricing">Pricing</NavLink>

//     </div>
//   );
// }

// export default Navbar;

import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.mainNav}>
      <div className={styles.logo}>
        <h2 className={styles.NavLink}>GYM</h2>
      </div>
      <div className={styles.links}>
        <ul>
          <li><NavLink className={styles.NavLink} to="/">Home</NavLink></li>
          <li><NavLink className={styles.NavLink} to="/about">About</NavLink></li>
          <li><NavLink className={styles.NavLink} to="/blogs">Blogs</NavLink></li>
          <li><NavLink className={styles.NavLink} to="/training">Training</NavLink></li>
          <li><NavLink className={styles.NavLink} to="/joinus">JoinUs</NavLink></li>
          <li><NavLink className={styles.NavLink} to="/pricing">Pricing</NavLink></li>
          <li><NavLink className={styles.NavLink} to="/footer">Footer</NavLink></li>
                             
        </ul>
      </div>
      <div className={styles.button}>
        <button className={styles.btn}>Join us</button>
      </div>
    </nav>
  );
};

export default Navbar;
