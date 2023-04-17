import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/AboutUs";
import Blogs from "./pages/Blogs";
import Trainer from "./pages/Trainer";
import JoinUs from "./pages/JoinUs";
import Navbar from "./components/Navbar";
import Pricing from "./pages/Pricing";
import Registration from "./pages/Registration";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Registration/>} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/trainer" element={<Trainer />} />
        <Route path="/joinus" element={<JoinUs />} />
        <Route path="/pricing" element={<Pricing/>} />
        <Route path="/registration" element={<Registration/>} />
      </Routes>
    </div>
  );
}

export default App;
