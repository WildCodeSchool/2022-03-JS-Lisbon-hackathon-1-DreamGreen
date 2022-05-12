import { Routes, Route } from "react-router-dom";
import Services from "./Components/Services/Services";
import React from "react";
// import Footer from "./Components/Footer";
import "./App.css";
import Form from "./Components/Form/Form";

function App() {
  return (

    <Routes>
      <Route path="/services" element={<Services />}></Route>
      {/* <Route path="/footer" element={<Footer />}></Route> */}
      <Route path="/form" element={<Form />}></Route>
    </Routes>

  );
}

export default App;
