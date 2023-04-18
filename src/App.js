import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/AboutUs";
import Blogs from "./pages/Blogs";
import Classes from "./pages/Classes";
import JoinUs from "./pages/JoinUs";

import Pricing from "./pages/Pricing";
import Login from "./pages/login_page/Login"

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/joinus" element={<JoinUs />} />
        <Route path="/pricing" element={<Pricing/>} />
        <Route path="/login" element ={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
