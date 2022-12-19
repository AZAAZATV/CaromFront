import React from "react";
import Navigation from "./Components/Navigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import TermsOfUse from "./Components/TermsOfUse";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/Terms-of-use" element={<TermsOfUse />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
