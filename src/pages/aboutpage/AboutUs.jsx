import React from "react";
import Styles from "./AboutUs.module.css";

function About() {
  return (
    <div>
      <div className={Styles.main}>
        <div className={Styles.first}>
          <div className={Styles.leftimg}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/ySN7eHIwTQs"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className={Styles.rightcontent}>
            <h1 style={{ color: "tomato", fontSize: "80px" }}>About Us</h1>
            <pre style={{ fontSize: "30px", marginLeft: "60px" }}>
              Find motivation from training with others for an efficient and
              <br />
              progressive workout. Offering interactive and energetic sessions,
              <br />
              Freestyle™ Group Training incorporates the latest equipment and
              <br />
              trained fitness staff. These classes are a great way to work the
              <br />
              whole body and improve overall fitness.
            </pre>
            <br />

            <button
              style={{
                backgroundColor: "red",
                fontWeight: "bold",
                fontSize: "30px",
                borderRadius: "15px",
              }}
            >
              Learn More
            </button>
          </div>
        </div>

        <br />
        <br />
        <br />

        <div className={Styles.second}>
          <div className={Styles.leftcontent}>
            <h1 style={{ color: "tomato", fontSize: "80px" }}>Why Choose US</h1>
            <p>
              <li> 💪Consulation With expert</li>
            </p>
            <p>
              Whatever you want from a workout, make DMT part of your training
              <br /> programme for quicker and more effective results.
            </p>

            <p>
              <li>🏋️‍♂️ Best workout facilities</li>
            </p>
            <p>
              Push your fitness further with our mix of facilities and we'll
              support you with advice on new and better ways to train.
            </p>
          </div>
          <div className={Styles.img2}>
            {" "}
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/s2NQhpFGIOg"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
