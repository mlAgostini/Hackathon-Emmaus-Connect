import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Information from "./pages/information/Information";
import Stockage from "./pages/Stockage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/information" element={<Information />} />
        <Route path="/stockage" element={<Stockage />} />
      </Routes>
    </Router>
  );
}

export default App;
