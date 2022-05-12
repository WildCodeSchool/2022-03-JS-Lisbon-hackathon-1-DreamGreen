import { Routes, Route } from "react-router-dom";
import AboutUs from "./Components/AboutUs/AboutUs";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/about" element={<AboutUs />}></Route>
      </Routes>
    </div>
  );
}

export default App;
