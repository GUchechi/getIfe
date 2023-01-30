import React from "react";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Gift from "../components/Gift";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ProductSection from "../components/ProductSection";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";


const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductSection />
      <Gift />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Home;
