import React from "react";
import Footer from "./Components/Footer/Footer";
import BurgerMenu from "./Components/BurgerMenu/BurgerMenu";
// import { Routes, Route } from 'react-router-dom';
import Services from "./Components/Services/Services";
import AboutUs from "./AboutUs/AboutUs";
import "./App.css";
import Form from "./Components/Form/Form";
import Impact from "./Components/Impact/Impact";
import HomePage from "./Components/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <BurgerMenu />
      <HomePage />
      <Form />
      <AboutUs />
      <Impact />
      <Services />
      <Footer />

      {/* <Routes>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/footer" element={<Footer />}></Route>
        <Route path="/form" element={<Form />}></Route>
      </Routes> */}
    </div>
  );
}

export default App;
