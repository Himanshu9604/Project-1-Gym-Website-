import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/aboutpage/AboutUs";

// import Classes from "./pages/Classes";
// import JoinUs from "./pages/JoinUs";
import Navbar from "./components/Navbar";
import Pricing from "./pages/pricing/Pricing";
import Login from "./pages/login_page/Login";
import Footer from "./components/Footer/Footer";
import Registration from "./pages/register/Register";
import Training from "./pages/training/Training";

function App() {
  return (
    <div className="App" style={{ backgroundColor: " #f2f2f2" }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* <Route path="/classes" element={<Classes />} /> */}
        {/* <Route path="/joinus" element={<JoinUs />} /> */}
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/joinus" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/training" element={<Training />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
