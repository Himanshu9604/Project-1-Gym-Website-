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
    { url: 'https://images.unsplash.com/photo-1561214095-fea147325936?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80' },
    { url: "https://thumbs.dreamstime.com/b/dumbbells-shelf-workout-gym-copy-space-blurred-gym-background-preparation-gym-exercises-workout-gym-161393354.jpg", title: "forest" },
    { url: "https://thumbs.dreamstime.com/b/dumbbell-barbell-workout-gym-empty-space-blurred-gym-background-dumbbell-barbell-workout-gym-space-161296647.jpg", title: "city" },
    { url: "https://thumbs.dreamstime.com/b/dumbbells-shelf-workout-gym-copy-space-blurred-gym-background-preparation-gym-exercises-workout-gym-161393354.jpg", title: "italy" },
  ];
  const images = ['first.jpg', 'second.jpg', 'Third.jpg', 'fourth.jpg'];
  const containerStyles = {
    width: "80vw",
    height: "100vh",
    
    border: '1px solid '
  };
  return (
    <Fragment>
      <div className="App">
        <Navbar />
        <div style={containerStyles}>
        <Slider slides={slides} />  
      
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
