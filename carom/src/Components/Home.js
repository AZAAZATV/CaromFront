import React, { useState, useEffect } from "react";
import "./Home.scss";
import moment from 'moment';
import 'moment/locale/ko';

function Home() {
  const [clock, setClock] = useState();
  const [sub1, setSub1] = useState(false);
  const [can1, setCan1] = useState(false);
  const [sub2, setSub2] = useState(false);
  const [can2, setCan2] = useState(false);
  useEffect(() => {
    const id = setInterval(() => {
      setClock(moment().format('hh:mm:ss'));
    }, 1);
    return (() => clearInterval(id));
  }, []);
  useEffect(() => {

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
          {!can1 ? (!sub1 ? <button onClick={() => setSub1(true)}>신청하기</button> : <button onClick={() => setCan1(true)}>신청취소</button>) : <button>신청 불가</button>}
        </div>

        <div className="applybox2">
          <p>2팀</p>
          <h2>0/4</h2>
          {!can2 ? (!sub2 ? <button onClick={() => setSub2(true)}>신청하기</button> : <button onClick={() => setCan2(true)}>신청취소</button>) : <button>신청 불가</button>}
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