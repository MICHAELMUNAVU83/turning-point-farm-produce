import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import ScrollToTop from "./pages/ScrollToTop";
import Products from "./pages/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
