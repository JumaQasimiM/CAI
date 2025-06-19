import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Colors from "./pages/Color";
import Apis from "./pages/Apis";
import Links from "./pages/Links";
import Navbar from "./components/Navbar";
function App() {
  return <>
  <Router>
    {/* Navbar */}
    <Navbar />
    <Routes>
      <Route path="/" element = {<Home />}/>
      <Route path="/colors" element = {<Colors />}/>
      <Route path="/links" element = {<Apis />}/>
      <Route path="/apis" element = {<Links />}/>
    </Routes>
  </Router>
  </>;
}

export default App;
