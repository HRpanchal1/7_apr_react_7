import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Product from "./Product";
function App() {
  return (
    <>
      {/* <img /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="about" element={<About />} />
            <Route path="contact"  element={<Contact />} />
            <Route path="Product" element={<Product />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
