import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Footer from "./components/Footer";
import Products from "./components/Products";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <Hero />
      <AboutUs />
      <Products />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
