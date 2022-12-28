import React from "react";
import Navigation from "./Components/Navigation";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import TermsOfUse from "./Components/TermsOfUse";
import UserList from "./Components/UserList";
import Login from './Components/Login';
import Signup from "./Components/Signup";
import Rule from "./Components/Rule";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/Terms-of-use" element={<TermsOfUse />} />
          <Route path="/Rule" element={<Rule />} />
          <Route path="/UserList" element={<UserList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Navigate to='/home' replace={true} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
