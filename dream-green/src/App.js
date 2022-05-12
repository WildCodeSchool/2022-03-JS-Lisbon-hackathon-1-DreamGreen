import React from "react";
import { Routes, Route } from "react-dom";
import Footer from "./Components/Footer";
import "./App.css";
import Form from "./Components/Form/Form";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/footer" element={<Footer />}></Route>
        <Route path="/form" element={<Form />}></Route>
      </Routes>
    </div>
  );
}

export default App;
