import React from "react";
import './Navigation.scss';

function Navigation() {
  return( <nav className="Navigation">
    <h1>Carom</h1>
    <ul>
        <li>Home</li>
        <li>이용규정</li>
        <li>신청목록</li>
        <li><a href="http://www.danggubaksa.com/home/billiards-basic/billiard-rules/">당구규칙</a></li>
    </ul>

    <ul className="navbar__icons">
         <li><img width={'40px'} src="https://cdn1.iconfinder.com/data/icons/iconoir-vol-3/24/log-out-256.png"/></li>
    </ul>

  </nav>);
}

export default Navigation;