import React from "react";
import {
  Route
  , Routes
} from "react-router-dom";
import Tech from "./Component/Tech/Tech";
import Proyects from "../src/Component/Proyects/Proyects";
import Me from "./Component/Me";
import Home from "../src/Component/Home/home";
import Contact from "../src/Component/Contact/contact";
import "./App.css";

function App( ) {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/proyects" element={<Proyects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/me" element={<Me />} />
      </Routes>
    </div>
  );
}

export default App;
