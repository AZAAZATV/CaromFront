import React, { useState, useEffect } from "react";
import Navigation from "./Components/Navigation";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import TermsOfUse from "./Components/TermsOfUse";
import UserList from "./Components/UserList";
import Login from './Components/Login';
import Signup from "./Components/Signup";
import Rule from "./Components/Rule";

function App() {
  const [logined, setLogined] = useState(false);
  const url = '218.149.72.115';
  useEffect(() => {
    setInterval(() => {
      if (localStorage.getItem('id') &&
        localStorage.getItem('name') && localStorage.getItem('class')) {
        setLogined(true);
      }
      else {
        setLogined(false);
      }
    }, 1);
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation name={localStorage.getItem('name')} class={localStorage.getItem('class')} />
        <Routes>
          <Route path="/home" element={logined ? <Home url={url} /> : <Navigate to='/login' replace={true} />} />
          <Route path="/Terms-of-use" element={logined ? <TermsOfUse /> : <Navigate to='/login' replace={true} />} />
          <Route path="/Rule" element={logined ? <Rule /> : <Navigate to='/login' replace={true} />} />
          <Route path="/UserList" element={logined ? <UserList url={url} /> : <Navigate to='/login' replace={true} />} />
          <Route path="/login" element={!logined ? <Login setLogined={setLogined} /> : <Navigate to='/home' replace={true} />} />
          <Route path="/signup" element={!logined ? <Signup /> : <Navigate to='/home' replace={true} />} />
          <Route path="*" element={logined ? <Navigate to='/home' replace={true} /> : <Navigate to='/login' replace={true} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
