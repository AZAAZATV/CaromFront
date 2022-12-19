import React from "react";
import './Navigation.scss';

function Navigation() {
  return <nav className="Navigation">
    <ul>
      <h1>Carom</h1>
      <li>
        <img width={'40px'} height={'40px'} src="https://cdn4.iconfinder.com/data/icons/eon-ecommerce-i-1/32/home_house_desktop_dashboard-256.png" title="home" alt="home" />
        <span>Home</span>
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
      <span id="user_icon">
        <img width={'40px'} src="https://cdn4.iconfinder.com/data/icons/eon-ecommerce-i-1/32/user_profile_man-512.png" alt="user_icon" />
      </span>
    </ul>
  </nav>;
}

export default Navigation;