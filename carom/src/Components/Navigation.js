import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Navigation.scss';

function Navigation() {
  const [id, setId] = useState('asdf');
  const [name, setName] = useState('asdf');
  useEffect(() => {
    // setId(localStorage.getItem('id'));
    // setId(localStorage.getItem('name'));
  }, []);
  return <nav className="Navigation">
    <Link to='/home'>
      <h1>Carom</h1>
    </Link>
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
          <Link to='/Rule'>
            당구 규칙
          </Link>
        </span>
      </li>
    </ul>

    {!id && !name ? <div className="log-in">
      <Link to='/login'>
        <button>로그인</button>
      </Link>
      <Link to='/signup'>
        <button>회원가입</button>
      </Link>
    </div> : <div className="logged">
      <span>ID : {id}</span>&nbsp;
      <span>이름 : {name}</span>
      <button onClick={() => {
        if (window.confirm("로그아웃 하시겠습니까?")) {
          window.localStorage.clear();
          setId();
          setName();
        }
      }}>로그아웃</button>
    </div>}
  </nav>;
}

export default Navigation;