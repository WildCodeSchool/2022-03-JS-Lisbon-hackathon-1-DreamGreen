import { Routes, Route } from "react-dom";
import Footer from "./Components/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/footer" element={<Footer />}></Route>
      </Routes>
    </div>
  );
}

export default App;
