import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/AboutUs";
import Blogs from "./pages/Blogs";
import Training from "./pages/Training";
import JoinUs from "./pages/JoinUs";
import Navbar from "./components/Navbar";
import Pricing from "./pages/Pricing";
import Registration from "./pages/Registration";
import Slider from "./pages/Slider";
import Footer from "./components/Footer";

function App() {
  const slides = [
    { url:  'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80' },
    { url: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGd5bSUyMGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' },
    { url: "https://thumbs.dreamstime.com/b/dumbbells-shelf-workout-gym-copy-space-blurred-gym-background-preparation-gym-exercises-workout-gym-161393354.jpg", title: "forest" },
    { url: "https://thumbs.dreamstime.com/b/dumbbell-barbell-workout-gym-empty-space-blurred-gym-background-dumbbell-barbell-workout-gym-space-161296647.jpg", title: "city" },
    { url: "https://thumbs.dreamstime.com/b/dumbbells-shelf-workout-gym-copy-space-blurred-gym-background-preparation-gym-exercises-workout-gym-161393354.jpg", title: "italy" },
  ];
  
  const containerStyles = {
    width: "80vw",
    height: "100vh",
    
    border: '1px solid green'
  };
  return (
    <Fragment>
      <div className="App">
        <Navbar />
        <div style={containerStyles}>
        <Slider slides={slides} />  
          //props pass
        </div>
        
      </div>

      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/training" element={<Training />} />
        <Route path="/joinus" element={<JoinUs />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/footer" element={<Footer/>} />
      </Routes>
    </Fragment>
  );
}

export default App;
