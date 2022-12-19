import React from "react";
import Navigation from "./Components/Navigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/home" />
          <Route path="/" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
