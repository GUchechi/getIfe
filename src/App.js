import "./App.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gift from "./components/Gift";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProductSection from "./components/ProductSection";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProductSection />
      <Gift />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
