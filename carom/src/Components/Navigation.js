import React from "react";
import './Navigation.scss';

function Navigation() {
  //asdfsadf
  return( <nav className="Navigation">
    <h1>Carom</h1>
    <ul>
        <li>Home</li>
        <li>이용규정</li>
        <li>신청목록</li>
        <li><a href="http://www.danggubaksa.com/home/billiards-basic/billiard-rules/">당구규칙</a></li>
    </ul>

    <div className="log-in">
         <button>로그인</button>
         <button>회원가입</button>
    </div>

  </nav>);
}

export default Navigation;