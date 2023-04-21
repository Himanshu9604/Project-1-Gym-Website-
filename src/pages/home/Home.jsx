import React from "react";
import styles from "./Home.module.css";
import { useNavigate } from "react-router";

function Home() {
  const navigate = useNavigate();
  function handleNavigation() {
    navigate("/joinus");
  }

  return (
    <div>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <h2 className={styles.txt}>
            <b> Are You ready to get</b> <br></br>{" "}
            <b>FIT , Strong & Motivated</b>
          </h2>

          <div className={styles.buttonContainer}>
            <button className={styles.btn} onClick={() => alert("Learn More")}>
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className={styles.section1}>
        <div>
          <h1 style={{ fontSize: "40px", color: "black" }}>
            Most people fail, not because of lack of desire, but, because of
            lack of commitment.
          </h1>
        </div>
        <div className={styles.textContainer}>
          <h2 style={{ color: "gray" }}>
            Get access to workout videos by international fitness trainers
          </h2>
          <div className={styles.buttonContainer}>
            <button
              style={{
                marginTop: "40px",
                padding: "20px 30px",
                fontSize: "15px",
                borderRadius: "40px",
                backgroundColor: "yellow",
                color: "red",
              }}
              onClick={handleNavigation}
            >
              JoinUS
            </button>
          </div>
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
