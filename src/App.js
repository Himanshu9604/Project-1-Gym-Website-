import React from "react";
import { useEffect } from "react";
import { Routes, Route , useHistory} from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/aboutpage/AboutUs";
import "./App.css";
import Navbar from "./components/Navbar";
import Pricing from "./pages/pricing/Pricing";
import Login from "./pages/login_page/Login";
import Footer from "./components/Footer/Footer";
import Registration from "./pages/register/Register";
import Training from "./pages/training/Training";
import ContactUs from "./pages/contactus/contact";
import NotFound from "./pages/notfoundpage/NotFound";

function App() {
  
  useEffect(() => {
    if (window.location.pathname !== '/') {
      window.location.replace('/');
    }
  }, []);
  

  return (

    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/joinus" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/training" element={<Training />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
