import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import ScrollToTop from "./pages/ScrollToTop";

const App = () => {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/byJafarov" element={<Home />}></Route>
        <Route path="/byJafarov/about" element={<About />}></Route>
        <Route path="/byJafarov/services" element={<Services />}></Route>
        <Route path="/byJafarov/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
};

export default App;
