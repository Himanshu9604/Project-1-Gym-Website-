import React, { useState } from "react";
import styles from "./contact.module.css";

function ContactUs() {
  const [name, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [message, setMessage] = useState("");
  const [number, setNumber] = useState("");
  let [arr, setArr] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
    let newData = [
      ...arr,
      { firstName: name, surname: lastname, message: message, numbers: number },
    ];
    setArr(newData);
    localStorage.setItem("userData", JSON.stringify(newData));
    setFirstName("");
    setLastName("");
    setMessage("");
    setNumber("");
  };

  return (

    <div className={styles.container}>
      
      <form onSubmit={handleSubmit} className={styles.form}>
        <img className={styles.logo} src="gif1.webp" />

        <div className={styles.formGroup}>
          <label className={styles.label}>First Name</label>
          <br />
          <input
            type="text"
            id="firstName"
            className={styles.input}
            value={name}
            onChange={(e) => setFirstName(e.target.value)}
          />
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
            onChange={(e) => setLastName(e.target.value)}
          />
          <br />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}> 🖋 Message</label>
          <br />
          <input
            type="text"
            id="message"
            className={styles.input}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <br />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>📳 Number</label>
          <br />
          <input
            type="number"
            id="number"
            className={styles.input}
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <br />
        </div>
        <br />
        <button className={styles.button}>Contact Us</button>
        <div>
         <p className={styles.details}><href>For more details contact us on : abc@gmail.com ,123456789</href></p>
         
     </div>
      </form>
      
      <div className={styles.map}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238540.7089800302!2d77.59692922207844!3d20.904328950948994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd6a4a67774bc15%3A0x3c7b3f78ca4f9635!2sAmravati%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1681911457405!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
}

export default ContactUs;





// import React, { useState, useRef } from "react";
// import styles from "./contact.module.css";

// function ContactUs() {
//   const [name, setFirstName] = useState("");
//   const [lastname, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [number, setNumber] = useState("");
//   let [arr, setArr] = useState([]);
//   const [emailError, setEmailError] = useState(false);
//   const [numError, setNumError] = useState(false);
//   const [nameError, setNameError] = useState(false);
//   const [lNameError, setLNameError] = useState(false);

//   let name1 = useRef("");
//   let lName = useRef("");
//   let email1 = useRef("");
//   let num = useRef("");

//   const emailRegex =
//     /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;          //regular expression for email

//   const passRegex =
//     /^(?=.[A-Za-z])(?=.\d)(?=.[@$!%#?&])[A-Za-z\d@$!%*#?&]{8,}$/;                  //register    

//   const handleName = (e) => {
//     name1.current = e.target.value;
//     if (name1.current.length < 3) {
//       setNameError(true);
//     } else {
//       setNameError(false);
//     }
//     setFirstName(name1.current);
//   };

//   const handleLastName = (e) => {
//     lName.current = e.target.value;
//     if (lName.current.length < 3) {
//       setLNameError(true);
//     } else {
//       setLNameError(false);
//     }
//     setLastName(lName.current);
//   };

//   const handleEmail = (e) => {
//     email1.current = e.target.value;
//     if (!email1.current.match(emailRegex)) {
//       setEmailError(true);
//     } else {
//       setEmailError(false);
//     }
//     setEmail(email1.current);
//   };

//   const handleNumber = (e) => {
//     num.current = e.target.value;
//     if (!num.current.match(passRegex)) {
//       setNumError(true);
//     } else {
//       setNumError(false);
//     }
//     setNumber(num.current);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (
//       name1.current.length < 3 ||
//       (lName.current.length < 3 && !email1.current.match(emailRegex)) ||
//       !num.current.match(passRegex)
//     ) {
//       setNameError(true);
//       setLNameError(true);
//       setEmailError(true);
//       setNumError(true);
//       console.log("not submitted please fill all fields");
//     } else {
//       setNameError(false);
//       setLNameError(false);
//       setEmailError(false);
//       setNumError(false);
//       console.log("form submitted");
//       alert("Register Successfully");
//       let newData = [
//         ...arr,
//         {
//           firstName: name,
//           surname: lastname,
//           Emailid: email,
//           number: number,
//         },
//       ];
//       setArr(newData);
//       localStorage.setItem("userData", JSON.stringify(newData));
//       setFirstName("");
//       setLastName("");
//       setEmail("");
//       setNumber("");
//       name1.current = "";
//       lName.current = "";
//       email1.current = "";
//       num.current = "";
//     }

//     console.log(name1.current, lName.current, email1.current, num.current);
//   };

//   return (
//     <div className={styles.container}>
//       <form onSubmit={handleSubmit} className={styles.form}>
//         <h2 className={styles.title} style={{ color: "black" }}>
//           Contact Us
//         </h2>
//         <br />
//         <div className={styles.formGroup}>
//           <label className={styles.label}>First Name</label>
//           <br />
//           <input
//             type="text"
//             id="firstName"
//             className={styles.input}
//             value={name}
//             onChange={handleName}
//           />
//           {nameError ? (
//             <div style={{ color: "red" }}>
//               * Name should be greater than 3 Characters
//             </div>
//           ) : (
//             ""
//           )}
//           <br />
//         </div>
//         <div className={styles.formGroup}>
//           <label className={styles.label}>Last Name</label>
//           <br />
//           <input
//             type="text"
//             id="lastName"
//             className={styles.input}
//             value={lastname}
//             onChange={handleLastName}
//           />
//           {lNameError ? (
//             <div style={{ color: "red" }}>
//               * Last Name should be greater than 3 Characters
//             </div>
//           ) : (
//             ""
//           )}
//           <br />
//         </div>
//         <div className={styles.formGroup}>
//           <label className={styles.label}>Email</label>
//           <br />
//           <input
//             type="email"
//             id="email"
//             className={styles.input}
//             value={email}
//             onChange={handleEmail}
//           />
//           {emailError ? (
//             <div style={{ color: "red" }}>* Invalid Email</div>
//           ) : (
//             ""
//           )}
//           <br />
//         </div>
//         <div className={styles.formGroup}>
//           <label className={styles.label}>Number</label>
//           <br />
//           <input
//             type="number"
//             id="number"
//             className={styles.input}
//             value={number}
//             onChange={handleNumber}
//           />
//           {numError ? (
//             <div style={{ color: "red" }}>
//               * Minimum eight characters, at least one uppercase letter, one
//               lowercase letter and one number and a special character
//             </div>
//           ) : (
//             ""
//           )}
//           <br />
//         </div>
//         <br />
//         <button className={styles.button}>Contact Us</button>
//       <div>
//         <p className={styles.details}><href>For more details contact us on : abc@gmail.com</href></p>
//       </div>
//       </form>
//     </div>
//   );
// }

// export default ContactUs;
