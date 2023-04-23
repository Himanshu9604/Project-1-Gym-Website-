import React, { useEffect, createContext } from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export let userLoginDataCon = "";
export let loginNameandSubsription = { id: 1 };
function Login({ dataFromLogin }) {
  const [useremail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allDataofSubscription, setAllDataof] = useState(
    JSON.parse(localStorage.getItem("subscription"))
      ? JSON.parse(localStorage.getItem("subscription"))
      : [{}]
  );
  const navigate = useNavigate();

  const [allData, setAllData] = useState(
    JSON.parse(localStorage.getItem("userData"))
      ? JSON.parse(localStorage.getItem("userData"))
      : [{}]
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    // Do login logic here
    if (allData) {
      const dataExistOrNot = allData.find(
        (item) => item.Emailid == useremail && item.password == password
      );

      if (dataExistOrNot != undefined) {
        // Swal.fire("Login Success");
        Swal.fire({
          icon: "success",
          title: "Success...",
          text: "Login Successful!",
        });
        userLoginDataCon = dataExistOrNot.Emailid;

        // console.log(allDataofSubscription);

        const isSubscribed = allDataofSubscription.find(
          (item) => item.EmailId == useremail
        );

        if (isSubscribed != undefined) {
          navigate("/training");
          dataFromLogin(dataExistOrNot.firstName, isSubscribed.price);
        } else {
          dataFromLogin(dataExistOrNot.firstName, 0);
          navigate("/");
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Opps...",
          text: "Login Failed!",
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Opps...",
        text: "Login Failed!",
      });
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
          <h1
            className={Styles.loginHeading}
            // style={{ color: "#4FB4CF", fontSize: "60px" }}
          >
            Login Page
          </h1>
          <div className={Styles.formDiv}>
            <input
              placeholder="UserEmail"
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
