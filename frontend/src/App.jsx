import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Information from "./pages/information/Information";
import Stockage from "./pages/stockage/Stockage";
import "./app.scss";

import Navbar from "./components/Navbar/Navbar";
import { LogingProvider } from "./contexts/LogingContext";

function App() {
  return (
    <Router>
      <div className="background-wrapper">
        <LogingProvider>
          <div className="homeHeader">
            <Navbar />
          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/information" element={<Information />} />
            <Route path="/stockage" element={<Stockage />} />
          </Routes>
        </LogingProvider>
      </div>
    </Router>
  );
}

export default App;
