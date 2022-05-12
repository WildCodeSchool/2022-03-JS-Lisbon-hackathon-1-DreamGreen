import { Routes, Route } from "react-router-dom";
import Services from "./Components/Services/Services";
// import Footer from "./Components/Footer";

import "./App.css";

function App() {
  return (

    <Routes>
      <Route path="/services" element={<Services />}></Route>
      <Route></Route>
    </Routes>

  );
}

export default App;
