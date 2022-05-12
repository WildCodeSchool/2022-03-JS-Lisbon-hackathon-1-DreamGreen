import React from "react";
import Footer from "./Components/Footer/Footer";
import BurgerMenu from "./Components/BurgerMenu/BurgerMenu";
import { Routes, Route } from 'react-router-dom';
import "./App.css";

function App() {
  return (
    <div className="App">
      <BurgerMenu />
      <Routes>
        <Route path="/footer" element={<Footer />}></Route>
      </Routes>
    </div>
  );
}

export default App;
