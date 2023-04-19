import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Styles from "./Login.module.css";

function Login() {
  const [useremail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allData, setAllData] = useState(
    JSON.parse(localStorage.getItem("userData"))
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do login logic here
    if (allData) {
      const dataExistOrNot = allData.find(
        (item) => item.Emailid == useremail && item.password == password
      );
      if (dataExistOrNot != undefined) {
        alert("Login Success");
      } else {
        alert("Login Failed");
      }
    } else {
      alert("Login Failed");
    }
  };

  return (
    <div>
      <div className={Styles.Container}>
        <div className={Styles.imgDivcontain}>
          <img
            width={600}
            height={600}
            src="https://www.shutterstock.com/shutterstock/photos/1308930601/display_1500/stock-vector-customer-profile-account-in-a-mobile-application-digital-marketing-user-overview-data-analysis-1308930601.jpg"
          />
        </div>
        <div className={Styles.mainDivImg}>
          <h1 style={{ color: "#4FB4CF", fontSize: "60px" }}>Login Page</h1>
          <div className={Styles.formDiv}>
            <input
              placeholder="UserName"
              type="text"
              value={useremail}
              onChange={(e) => setEmail(e.target.value)}
              className={Styles.inputFieldUserName}
            />
            <br />
            <input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={Styles.inputFieldPassword}
            />
            <br />
            <button
              className={Styles.loginButton}
              onClick={handleSubmit}
              type="submit"
            >
              Log In
            </button>
            <br />
            <NavLink to="/register" className={Styles.navlink}>
              Register ?{" "}
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
