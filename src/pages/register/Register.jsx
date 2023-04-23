import React, { useState, useRef } from "react";
import styles from "./Registration.module.css";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

function Registration() {
  const [name, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let [arr, setArr] = useState([]);
  const [emailError, setEmailError] = useState(false);
  const [passError, setPassError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [lNameError, setLNameError] = useState(false);
  const navigate = useNavigate();

  const [allData, setAllData] = useState(
    JSON.parse(localStorage.getItem("userData"))
  );

  let name1 = useRef("");
  let lName = useRef("");
  let email1 = useRef("");
  let pass = useRef("");

  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const passRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  const handleName = (e) => {
    name1.current = e.target.value;
    if (name1.current.length < 3) {
      setNameError(true);
    } else {
      setNameError(false);
    }
    setFirstName(name1.current);
  };

  const handleLastName = (e) => {
    lName.current = e.target.value;
    if (lName.current.length < 3) {
      setLNameError(true);
    } else {
      setLNameError(false);
    }
    setLastName(lName.current);
  };

  const handleEmail = (e) => {
    email1.current = e.target.value;
    if (!email1.current.match(emailRegex)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    setEmail(email1.current);
  };

  const handlePassword = (e) => {
    pass.current = e.target.value;
    if (!pass.current.match(passRegex)) {
      setPassError(true);
    } else {
      setPassError(false);
    }
    setPassword(pass.current);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      name1.current.length < 3 ||
      (lName.current.length < 3 && !email1.current.match(emailRegex)) ||
      !pass.current.match(passRegex)
    ) {
      setNameError(true);
      setLNameError(true);
      setEmailError(true);
      setPassError(true);
      console.log("not submitted please fill all fields");
    } else {
      if (allData) {
        const dataExistOrNot = allData.find((item) => item.Emailid == email);
        if (dataExistOrNot != undefined) {
          alert("Email is exist use another email.");
        } else {
          setNameError(false);
          setLNameError(false);
          setEmailError(false);
          setPassError(false);
          console.log("form submitted");

          let newData = [
            ...allData,
            {
              firstName: name,
              surname: lastname,
              Emailid: email,
              password: password,
            },
          ];
          setArr(newData);
          localStorage.setItem("userData", JSON.stringify(newData));
          setFirstName("");
          setLastName("");
          setEmail("");
          setPassword("");
          name1.current = "";
          lName.current = "";
          email1.current = "";
          pass.current = "";

          const alertBox = window.confirm(
            "Register Successfully, Are you want our Subscription."
          );
          if (alertBox) {
            navigate("/pricing");
          } else {
            navigate("/");
          }
        }
      } else {
        setNameError(false);
        setLNameError(false);
        setEmailError(false);
        setPassError(false);
        console.log("form submitted");

        let newData = [
          ...arr,
          {
            firstName: name,
            surname: lastname,
            Emailid: email,
            password: password,
          },
        ];
        setArr(newData);
        localStorage.setItem("userData", JSON.stringify(newData));
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        name1.current = "";
        lName.current = "";
        email1.current = "";
        pass.current = "";
        const alertBox = window.confirm(
          "Register Successfully, Are you want our Subscription."
        );
        if (alertBox) {
          navigate("/pricing");
        } else {
          navigate("/");
        }
      }
    }

    console.log(name1.current, lName.current, email1.current, pass.current);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2 className={styles.title} style={{ color: "black" }}>
          Register Here
        </h2>
        <br />
        <div className={styles.formGroup}>
          <label className={styles.label}>First Name</label>
          <br />
          <input
            type="text"
            id="firstName"
            className={styles.input}
            value={name}
            onChange={handleName}
          />
          {nameError ? (
            <span style={{ color: "red" }}>
              * Name should be greater than 3 Characters
            </span>
          ) : (
            ""
          )}
          <br />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Last Name</label>
          <br />
          <input
            type="text"
            id="lastName"
            className={styles.input}
            value={lastname}
            onChange={handleLastName}
          />
          {lNameError ? (
            <span style={{ color: "red" }}>
              * Last Name should be greater than 3 Characters
            </span>
          ) : (
            ""
          )}
          <br />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Email</label>
          <br />
          <input
            type="email"
            id="email"
            className={styles.input}
            value={email}
            onChange={handleEmail}
          />
          {emailError ? (
            <span style={{ color: "red" }}>* Invalid Email</span>
          ) : (
            ""
          )}
          <br />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Password</label>
          <br />
          <input
            type="password"
            id="password"
            className={styles.input}
            value={password}
            onChange={handlePassword}
          />
          {passError ? (
            <span style={{ color: "red" }}>
              * Minimum eight characters, at least one uppercase letter, one
              lowercase letter and one number and a special character
            </span>
          ) : (
            ""
          )}
          <br />
        </div>
        <br />
        <button className={styles.button}>Register</button>
        <div className={styles.loginav}>
          <NavLink to="/login">Go to Login page</NavLink>
        </div>
      </form>
    </div>
  );
}

export default Registration;
