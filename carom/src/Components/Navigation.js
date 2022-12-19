import React from "react";
import { Link } from "react-router-dom";
import './Navigation.scss';

function Navigation() {
  return <nav className="Navigation">
    <h1>Carom</h1>
    <ul>
      <li>
        <span><Link to="/home">Home</Link></span>
      </li>
      <li>
        <span><Link to='/'>이용규정</Link></span>
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
  </nav>;
}

export default Navigation;