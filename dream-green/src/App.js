import React from "react";
import Footer from "./Components/Footer/Footer";
import BurgerMenu from "./Components/BurgerMenu/BurgerMenu";
// import { Routes, Route } from 'react-router-dom';
import Services from "./Components/Services/Services";
import "./App.css";
import Form from "./Components/Form/Form";

function App() {
  return (
    <div className="App">
      <BurgerMenu />
      <Form />
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
