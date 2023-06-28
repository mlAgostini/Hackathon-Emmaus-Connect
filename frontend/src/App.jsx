import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Informations from "./pages/Informations";
import Stockage from "./pages/Stockage";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { LogingProvider } from "./contexts/LogingContext";

function App() {
  return (
    <Router>
      <div className="homeHeader">
        <LogingProvider>
          <Navbar />
        </LogingProvider>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/informations" element={<Informations />} />
        <Route path="/stockage" element={<Stockage />} />
      </Routes>
    </Router>
  );
}

export default App;
