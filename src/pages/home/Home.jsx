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
      url: "https://thumbs.dreamstime.com/b/dumbbells-shelf-workout-gym-copy-space-blurred-gym-background-preparation-gym-exercises-workout-gym-161393354.jpg",
     
    },
    {
      url: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3ltfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      
    },
    {
      url: "https://thumbs.dreamstime.com/b/dumbbells-shelf-workout-gym-copy-space-blurred-gym-background-preparation-gym-exercises-workout-gym-161393354.jpg",
   
    },
  ];

  const containerStyles = {
    width: "90vw",
    height: "70vh",
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
            Download the Gold's Gym India App today
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
        style={{ width: "98.1vw", height: "100vh", marginTop: "20px" }}
      />
    </div>
  );
}

export default Home;
