import React from "react";
import './Login.scss';

function Login() {
    return <div className="Login">
        <div className="box">
            <div className="maintitle">
                <p>Carom</p>
            </div>

            <div className="title">로그인을 해주세요!</div>

            <div className="log-in">
                <input placeholder="아이디" />
                <img className="phoneImage" src="image/login.png" alt="login" />
            </div>

            <div className="secrit">
                <input placeholder="비밀번호" />
                <img className="phoneImage2" src="image/secrit.png" alt="secret" />
            </div>

            <div className="log-btn">
                <button className="btn">로그인</button>
            </div>

            <div className="make">
                <p>아직 계정이 없으신가요?</p>

                <div className="make-log">
                    <button className="join-btn">회원가입</button>
                </div>
            </div>

            <div className="line">

            </div>
        </div>

    </div>;
}

export default Login;