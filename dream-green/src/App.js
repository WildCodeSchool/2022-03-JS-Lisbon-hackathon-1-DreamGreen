import { Routes, Route } from "react-router-dom";
import React from "react";
import Footer from "./Components/Footer/Footer.jsx";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Footer />
      <Routes>
        <Route path="/footer" element={<Footer />}></Route>
      </Routes>
    </div>
  );
}

export default App;
