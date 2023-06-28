import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Informations from "./pages/Informations";
import Stockage from "./pages/Stockage";
import "./App.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/informations" element={<Informations />} />
        <Route path="/stockage" element={<Stockage />} />
      </Routes>
    </Router>
  );
}

export default App;
