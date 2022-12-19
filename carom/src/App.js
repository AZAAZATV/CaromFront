import React from "react";
import Navigation from "./Components/Navigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import TermsOfUse from "./Components/TermsOfUse";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/Terms-of-use" element={<TermsOfUse />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
