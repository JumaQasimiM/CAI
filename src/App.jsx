import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CAL from "./pages/CAL";
import Navbar from "./components/Navbar";
function App() {
  return <>
  <Router>
    {/* Navbar */}
    <Navbar />
    <Routes>
      <Route path="/" element = {<Home />}/>
      <Route path="/cal" element = {<CAL />}/>
    </Routes>
  </Router>
  </>;
}

export default App;
