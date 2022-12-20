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
        <span><Link to='/Terms-of-use'>이용규정</Link></span>
      </li>
      <li>
        <span><Link to='/UserList'>신청목록</Link></span>
      </li>
      <li>
        <span>
          {/* <a href="http://www.danggubaksa.com/home/billiards-basic/billiard-rules/" target={"_blank"} rel='noonpener noreferrer'>
          </a> */}
          <Link to='/Rule'>
            당구 규칙
          </Link>
        </span>
      </li>
    </ul>
    <div className="log-in">
      <Link to='/login'>
        <button>로그인</button>
        <button>회원가입</button>
      </Link>
    </div>
  </nav>;
}

export default Navigation;