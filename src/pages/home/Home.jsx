import React from "react";
import Slider from "../slider/Slider";
import styl from "./Home.module.css";
import { useNavigate } from "react-router";

function Home() {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1561214095-fea147325936?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
    },
    {
      url: "https://c4.wallpaperflare.com/wallpaper/692/659/618/man-workout-gym-working-wallpaper-preview.jpg",
    },
    {
      url: "https://images.unsplash.com/photo-1580086319619-3ed498161c77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      url: "https://wallpaperaccess.com/full/1535446.jpg",
    },
    {
      url: "https://cdn.pixabay.com/photo/2018/04/05/17/21/kettlebell-3293475__340.jpg",
    },
    {
      url: "https://as2.ftcdn.net/v2/jpg/01/75/70/77/1000_F_175707764_hJaeECfaRwFY1au8Emlas9Xf94AqCMlj.jpg",
    },
    {
      url: "https://as2.ftcdn.net/v2/jpg/04/05/05/83/1000_F_405058390_A6UbmkJWd8LxUmDdE0KO33AwHXvAgACg.jpg",
    },
  ];

  const containerStyles = {
    width: "90vw",
    height: "100vh",
    overflow: "hidden",
  };

  const navigate = useNavigate();
  function handleNavigation() {
    navigate("/joinus");
  }

  return (
    <div>
      <div style={containerStyles}>
        <Slider slides={slides} />
      </div>

      <div className={styl.data1}>
        <h1 className={styl.head1}>We can give you</h1>
        <h1 style={{ color: "tomato" }}>Much More Than Others</h1>
      </div>

      <div className={styl.section1}>
        <div style={{}}>
          <h1 style={{ fontSize: "40px", color: "black" }}>
            Most people fail, not because of lack of desire, but, because of
            lack of commitment.
          </h1>
          <h2>
            {" "}
            Get access to workout videos by international fitness trainers
          </h2>
        </div>
        <div>
          {/* <button
            style={{ marginTop: "40px", padding: "30px", borderRadius: "40px" }}
          > */}
          <div>
            <button
              style={{
                marginTop: "40px",
                padding: "20px 30px",
                borderRadius: "40px",
              }}
              onClick={handleNavigation}
            >
              JoinUS
            </button>
          </div>
          {/* </button> */}
        </div>
      </div>
      <img
        src="https://prod-ne-cdn-media.puregym.com/media/818843/beginner-gym-workout-plan_header.jpg?quality=80"
        // style={{ width: "98.1vw", height: "100vh", marginTop: "20px" }}
      />
    </div>
  );
}

export default Home;

// import React from "react";
// import styles from "./Home.module.css";
// import { useNavigate } from "react-router";

// function Home() {
//   const navigate = useNavigate();
//   function handleNavigation() {
//     navigate("/joinus");
//   }

//   return (
//     <div>
//       <div className={styles.header}>
//         <div className={styles.headerContent}>
//           <h2 className={styles.txt}>
//             <b> Are You ready to get</b> <br></br>{" "}
//             <b>FIT , Strong & Motivated</b>
//           </h2>

//           <div className={styles.buttonContainer}>
//             <button className={styles.btn} onClick={() => alert("Learn More")}>
//               Learn More
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className={styles.section1}>
//         <div>
//           <h1 style={{ fontSize: "40px", color: "black" }}>
//             Most people fail, not because of lack of desire, but, because of
//             lack of commitment.
//           </h1>
//         </div>
//         <div className={styles.textContainer}>
//           <h2 style={{ color: "gray" }}>
//             Get access to workout videos by international fitness trainers
//           </h2>
//           <div className={styles.buttonContainer}>
//             <button
//               style={{
//                 marginTop: "40px",
//                 padding: "20px 30px",
//                 fontSize: "15px",
//                 borderRadius: "40px",
//                 backgroundColor: "yellow",
//                 color: "red",
//               }}
//               onClick={handleNavigation}
//             >
//               JoinUS
//             </button>
//           </div>
//         </div>
//       </div>
//       <img
//         src="https://prod-ne-cdn-media.puregym.com/media/818843/beginner-gym-workout-plan_header.jpg?quality=80"
//         style={{ width: "98.1vw", height: "100vh", marginTop: "20px" }}
//       />
//     </div>
//   );
// }

// export default Home;
