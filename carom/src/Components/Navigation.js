import React from "react";
import './Navigation.scss';

function Navigation() {
  return( <nav className="Navigation">
    <h1>Carom</h1>
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
      <li>
        <span><a href="http://www.danggubaksa.com/home/billiards-basic/billiard-rules/" target={"_blank"} rel='noonpener noreferrer'>당구 규칙</a></span>
      </li>
    </ul>

    <div className="log-in">
         <button>로그인</button>
         <button>회원가입</button>
    </div>

  </nav>);
}

export default Navigation;