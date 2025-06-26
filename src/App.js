import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


import Homepage from "./Pages/Homepage";
import About from "./Pages/About";
import Metaverse from "./Pages/Metaverse.js";
import Strategy from "./Pages/Strategy.js";
import Casestudy from "./Pages/Casestudy.js";

function App() {
  return (
    <>
     <BrowserRouter>
          <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/about" element={<About />} />
              <Route path="/strategy" element={<Strategy />} />
              <Route path="/metaverse" element={<Metaverse />} />
              <Route path="/case-study" element={<Casestudy />} />
              </Routes>
        </BrowserRouter>

    </>
  );
}

export default App;
