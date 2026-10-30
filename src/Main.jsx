// Main entry file (App.jsx or index.js layout)
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Packages from "./Components/Packages";
import styled from "styled-components";

function Main() {
  return (
    <BrowserRouter>
      <MainStyle>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/packages" element={<Packages />} />
        </Routes>
      </MainStyle>
    </BrowserRouter>
  );
}

const MainStyle = styled.div``;

export default Main;
