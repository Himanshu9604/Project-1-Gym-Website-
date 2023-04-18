import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/aboutpage/AboutUs";
import Blogs from "./pages/Blogs";
import Classes from "./pages/Classes";
import JoinUs from "./pages/JoinUs";
import Navbar from "./components/Navbar";
import Pricing from "./pages/Pricing";
import Login from "./pages/login_page/Login"
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/joinus" element={<JoinUs />} />
        <Route path="/pricing" element={<Pricing/>} />
        <Route path="/login" element ={<Login/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
