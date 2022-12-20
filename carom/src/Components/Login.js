import React from "react";
import './Login.scss';
import {Link} from 'react-router-dom';

function Login() {
    return <div className="Login">
        <div className="box">
            <div className="maintitle">
            <p>Carom</p>
            </div>

            <div className="title">로그인을 해주세요!</div>

            <div className="log-in">
                <input placeholder="아이디" />
                <img className="phoneImage" src="image/login.png" />
            </div>

            <div className="secrit">
                <input placeholder="비밀번호" type={"password"}/>
                <img className="phoneImage2" src="image/secrit.png" />
            </div>

            <div className="log-btn">
                <button className="btn">로그인</button>
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

                <img className="phoneImage3" src="image/loginball.png" />
            </div>

            <div className="line">

            </div>
        </div>

    </div>;
}

export default Login;