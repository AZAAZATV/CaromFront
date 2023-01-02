import React, { useState } from "react";
import './Login.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Login(props) {
  const [id, setId] = useState();
  const [password, setPassword] = useState();
  const tryLogin = async () => {
    try {
      const data = await axios({
        url: `http://${props.url}:8080/signup/login`,
        method: 'post',
        data: JSON.stringify({
          id: String(id),
          password: parseInt(password),
        }),
        headers: { 'Content-Type': `application/json`, 'withCredentials': 'true', 'Access-Control-Allow-Origin': '*' }
      });
      if (data.data !== 'login') {
        localStorage.setItem('id', id);
        localStorage.setItem('name', data.data.name);
        localStorage.setItem('class', data.data.class);
        props.setName(localStorage.getItem('name'));
        props.setClassInfo(localStorage.getItem('class'));
        alert("로그인 완료");
      }
      else {
        alert('잘못된 입력');
      }
    } catch (e) {
      console.log(e);
    }
  }
  return <div className="Login">
    <div className="box">
      <div className="maintitle">
        <p>Carom</p>
      </div>
      <div className="title">로그인을 해주세요!</div>
      <div className="log-in">
        <input placeholder="아이디" type='text' maxLength={10} onChange={(e) => {
          const E = /[^1-9a-zA-Z]/g;
          if (E.test(e.target.value)) {
            e.target.value = e.target.value.replace(E, '');
          }
          setId(e.target.value);
        }} />
        <img className="phoneImage" src="image/login.png" alt="login" />
      </div>
      <div className="secrit">
        <input placeholder="비밀번호" type={'password'} maxLength={9} onChange={(e) => {
          const E = /[^0-9]/g;
          if (E.test(e.target.value)) {
            e.target.value = e.target.value.replace(E, '');
          }
          setPassword(e.target.value);
        }} />
        <img className="phoneImage2" src="image/secrit.png" alt="secret" />
      </div>
      <div className="log-btn">
        <button className="btn" onClick={() => {
          tryLogin();
        }}>로그인</button>
      </div>

      <div className="make">
        <div className="nosign">아직계정이 없으신가요?</div>
        <Link to='/signup'>
          <p>계정만들기</p>
        </Link>
      </div>
      <div className="write">
        <p>예약하고</p>
        <p>당구치러가자!</p>
        <img className="phoneImage3" src="image/당구로고.png" alt="loginimage" />
      </div>
      <div className="line" />
    </div>
  </div>;
}

export default Login;