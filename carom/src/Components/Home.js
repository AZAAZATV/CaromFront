import React, { useState, useEffect } from "react";
import "./Home.scss";
import moment from 'moment';
import 'moment/locale/ko';

function Home() {
  const [clock, setClock] = useState();
  useEffect(() => {
    const id = setInterval(() => {
      setClock(moment().format('hh:mm:ss'));
    }, 1);
    return (() => clearInterval(id));
  }, []);
  return <div className="Home">
    <div className="main">

      <div className="clockbox">
        <div className="clock">
          {clock}
        </div>
      </div>

      <div className="alert">
        <h2>공지사항</h2>

        <div className="alertbox">
          ??
        </div>
      </div>

      <div className="apply">
        <h2>당구신청</h2>

        <div className="applybox1">
          <p>1팀</p>
          <h2>0/4</h2>
          <button>신청하기</button>
        </div>

        <div className="applybox2">
          <p>2팀</p>
          <h2>0/4</h2>
          <button>신청하기</button>
        </div>

        <div className="rulebox">
          <h2>이용규정</h2>
          <div className="rulebox2">
            ??
          </div>
        </div>

      </div>


    </div>
  </div>;
}



export default Home;