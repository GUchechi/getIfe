import "./App.css";
import Home from "./components/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import Modal from "./components/Modal";

function App() {
  return (
    <>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/modal" element={<Modal />} />
      </Routes>
    </>
  );
}

export default App;
