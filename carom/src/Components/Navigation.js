import React from "react";
import './Navigation.scss';

function Navigation() {
  return <nav className="Navigation">
    <ul>
      <h1>Carom</h1>
      <li>
        <img title="home" alt="home" /><span>home</span>
      </li>
      <li>
        <span>이용규정</span>
      </li>
      <li>
        <span>신청목록</span>
      </li>
    </ul>
  </nav>;
}

export default Navigation;