import "./App.css";
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
    </>
  );
}

export default App;
