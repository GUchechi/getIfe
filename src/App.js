import "./App.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gift from "./components/Gift";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Navbar from "./components/Navbar";
import ProductSection from "./components/ProductSection";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <>
      <Navbar />
      {/* <Nav /> */}
      <Home />
      <ProductSection />
      <Gift />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
