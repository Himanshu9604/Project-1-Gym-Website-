import React from "react";
import Styles from "./AboutUs.module.css";

function About() {
  return (
    <div>
      <div>
        <div>
          <iframe
            width="1510"
            height="440"
            class="shogun-video-embed "
            src="https://www.youtube.com/embed/lpxKE4gLn8U?start=0&end=0&autoplay=1&loop=1&mute=1&playlist=lpxKE4gLn8U&version=3&rel=0"
            allowfullscreen
            title="Embedded Youtube Video"
          >
            …
          </iframe>
        </div>
      </div>
      <div className={Styles.nopain}>
        <iframe
          width="1510"
          height="340"
          src="https://www.youtube.com/embed/-Ov9JTw-59s"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>{" "}
      </div>
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
            <h1 style={{ color: "tomato", fontSize: "80px" }}> 🏋🏻‍♂️About Us</h1>
            <p style={{ fontSize: "23px", marginLeft: "50px" }}>
              Find motivation from training with others for an efficient and
              <br />
              progressive workout. Offering interactive and energetic sessions,
              <br />
              Freestyle™ Group Training incorporates the latest equipment and
              <br />
              trained fitness staff. These classes are a great way to work the
              <br />
              whole body and improve overall fitness.
            </p>
            <br />

            <button
              style={{
                backgroundColor: "red",
                fontWeight: "bold",
                fontSize: "20px",
                borderRadius: "10px",
              }}
              onClick={() => alert("Clicked From About us section")}
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
            <h1 style={{ color: "tomato" }}>Why Choose US</h1>
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
        <div className={Styles.culture}>
          <h1>Our Culture</h1>
          <p style={{ color: "black" }}>
            We know that building a positive culture is incredibly important. We
            believe in encouraging, supporting, challenging, learning and
            growing to be the best! Our flexible working solutions, <br />
            gym rebates and educational opportunities create a positive
            work/life balance for all our employees.
            <br />
            <br />
            We believe in giving back and offering time, money and products to
            volunteer services and community organisations.
            <br />
            We’re committed to improving individuals' health, fitness, and
            well-being by supporting global and local charities, local sports
            teams, and events.
            <br />
            If you're looking for an opportunity to grow at a company that's
            empowered, inclusive, and values great work—you should work with us.
          </p>
        </div>
        <div>
          <iframe
            width="1490"
            height="540"
            src="https://www.youtube.com/embed/HUlmP6cPXvQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default About;
