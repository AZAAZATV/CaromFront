import React, { useState, useEffect } from "react";
import "./Home.scss";
import moment from 'moment';
import 'moment/locale/ko';
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [clock, setClock] = useState();
  const [name, setName] = useState('김강현');
  const [className, setClassName] = useState('1-2-2');
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [sub1, setSub1] = useState(false);
  const [sub2, setSub2] = useState(false);

  const [can1, setCan1] = useState(false);
  const [can2, setCan2] = useState(false);

  const [regiA, setRegiA] = useState(0);
  const [regiB, setRegiB] = useState(0);
  const post1 = async () => {
    try {
      await axios({
        url: `http://10.82.18.67:8080/apply/applyinfo1`,
        method: 'post',
        data: JSON.stringify({
          name: String(name),
          class: String(className),
        }),
        headers: { 'Content-Type': `application/json`, 'withCredentials': 'true', 'Access-Control-Allow-Origin': '*' }
      });
    } catch (e) {
      console.log(e);
    }
  }
  const post2 = async () => {
    try {
      await axios({
        url: `http://10.82.18.67:8080/apply/applyinfo2`,
        method: 'post',
        data: JSON.stringify({
          name: String(name),
          class: String(className),
        }),
        headers: { 'Content-Type': `application/json`, 'withCredentials': 'true', 'Access-Control-Allow-Origin': '*' }
      })
    } catch (e) {
      console.log(e);
    }
  }
  const setting = async () => {
    try {
      const data1 = await axios({
        url: `http://10.82.18.67:8080/apply/applyinfolist`,
        method: 'get'
      })
      console.log(data1.data);
      setData1(data1.data);
      setRegiA(data1.data.length);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    const id = setInterval(() => {
      setClock(moment().format('hh:mm:ss'));
    }, 100);
    return (() => clearInterval(id));
  }, []);
  useEffect(() => {//유저 정보 가지고 올거임.
    if (localStorage.length > 1) {
      setRegiA(localStorage.getItem('regiA') ? localStorage.getItem('regiA') : 0); //1번째 당구 신청 페이지 불러옴
      setRegiB(localStorage.getItem('regiB') ? localStorage.getItem('regiB') : 0);
      setSub1(localStorage.getItem('sub1') === 1);
      setSub2(localStorage.getItem('sub2') === 1);
      // setCan1(localStorage.getItem('can1'));
      // setCan2(localStorage.getItem('can2'));
    }
    setting();
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
          테스트 기간입니다. <br></br>
          잘 만들어 봅시다.
        </div>
      </div>

      <div className="apply">
        <Link to={'/userlist'}>
          <h2>당구신청</h2>
        </Link>
        <div className="applybox1">
          <p>1팀</p>
          <h2>{regiA}/4</h2>
          {!can1 && !sub2 ? (!sub1 && data1.length < 4 ? <button onClick={() => {
            setSub1(true); post1(); setting();
            setRegiA(() => data1.length);
            localStorage.setItem('regiA', data1.length);
            localStorage.setItem('sub1', true);
            alert('신청됨');
          }}>신청하기</button>
            : <button onClick={() => {
              setCan1(true); post1(); setting();
              setRegiA(() => data1.length);
              localStorage.setItem('regiA', data1.length);
              localStorage.setItem('sub1', false);
              localStorage.setItem('can1', true);
              setSub1(false); alert('신청취소됨');
            }}>신청취소</button>)
            : <button>신청 불가</button>}
        </div>
        <div className="applybox2">
          <p>2팀</p>
          <h2>{regiB}/4</h2>
          {!can2 && !sub1 ? (!sub2 ? <button onClick={() => {
            setSub2(true); post2(); setting();
            setRegiB(() => data2.length);
            localStorage.setItem('regiB', data2.length);
            localStorage.setItem('sub2', true);
            alert('신청됨');
          }}>신청하기</button>
            : <button onClick={() => {
              setCan2(true); post2(); setting();
              setRegiB(() => data2.length);
              localStorage.setItem('regiB', data2.length);
              localStorage.setItem('sub2', false);
              localStorage.setItem('can2', true);
              setSub2(false); alert('신청취소됨');
            }}>신청취소</button>)
            : <button>신청 불가</button>}
        </div>
      </div>
      <div className="rulebox">
        <h2>이용규정</h2>
        <div className="rulebox2">
          알잘딱깔센
        </div>
      </div>
    </div>
  </div >;
}



export default Home;