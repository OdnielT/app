// Main entry file (App.jsx or index.js layout)
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Home from "./Components/Home";
import About from "./Components/About"; // Confirm this path matches your directory exactly

function Main() {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Main;
