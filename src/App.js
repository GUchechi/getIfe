import "./App.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gift from "./components/Gift";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Products from "./components/Products/Products";
import ProductSection from "./components/ProductSection";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Products />
      {/* <ProductSection /> */}
      <Gift />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
