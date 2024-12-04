import React from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
import About from "./components/About";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Experience />
      <About />
      <Footer />
      <ScrollToTop /> {/* Add ScrollToTop here */}
    </>
  );
}

export default App;
