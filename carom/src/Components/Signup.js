import React, { useState } from "react";
import './Signup.scss';
import axios from 'axios';

function Signup() {
  const [a, setA] = useState(-1);
  const [b, setB] = useState(-1);
  const [c, setC] = useState(-1);

  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState();
  const signup = () => {
    try {
      axios.get(`http://10.82.18.67:8080/signup/insert?ID=${id}&PASSWORD=${password}&NAME=${name}&CLASS=${a}-${b}-${c}`, {}, { withCredentials: true }).then(() => alert("회원가입이 완료 되었습니다."))
        .then(() => document.location.href = '/login');
    } catch (e) {
      console.log(e);
    }
  }
  return <div className="sign-up">
    <form className="sign-box" onSubmit={(e) => { e.preventDefault() }}>
      <div className="signup-title">
        <p>Carom</p>
      </div>

      <div className="name">
        <p>이름</p>
        <input type='text' maxLength={10} onChange={(e) => {
          const E = /[^ㄱ-ㅎ가-힣]/g;
          if (E.test(e.target.value)) {
            e.target.value = e.target.value.replace(E, '');
          }
          setName(e.target.value);
        }} placeholder='10자 이내 한글입력' />
      </div>

      <div className="Id">
        <p>아이디</p>
        <div>
          <input type='text' maxLength={10} onChange={(e) => {
            const E = /[^a-zA-Z]/g;
            if (E.test(e.target.value)) {
              e.target.value = e.target.value.replace(E, '');
            }
            setId(e.target.value);
          }} placeholder='10자 이내 영문입력' />
          <button>중복확인</button>
        </div>
      </div>

      <div className="password">
        <p>비밀번호</p>
        <input type='text' maxLength={9} onChange={(e) => {
          const E = /[^0-9]/g;
          if (E.test(e.target.value)) {
            e.target.value = e.target.value.replace(E, '');
          }
          setPassword(e.target.value);
        }} value={password} placeholder='9자 이내 숫자 입력' />
      </div>

      <div className="classnum">
        <div className="class-input">
          <select id="class1" className="input" onChange={(e) => setA(e.target.value)}>
            <option value={-1}>학년</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </select>

          <select id="class2" className="input" onChange={(e) => setB(e.target.value)}>
            <option value={-1}>반</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={3}>4</option>
          </select>

          <select id="class3" className="input" onChange={(e) => setC(e.target.value)}>
            <option value={-1}>번호</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
            <option value={10}>10</option>
            <option value={11}>11</option>
            <option value={12}>12</option>
            <option value={13}>13</option>
            <option value={14}>14</option>
            <option value={15}>15</option>
            <option value={16}>16</option>
            <option value={17}>17</option>
            <option value={18}>18</option>
            <option value={19}>19</option>
            <option value={20}>20</option>
          </select>
        </div>
        <div className="sign-btn">
          <button onClick={() => {
            if (id && name && password && a !== -1 && b !== -1 && c !== -1) {
              signup();
            } else {
              alert("값을 정확하게 입력해 주십시오.");
            }
          }}>회원가입</button>
        </div>
      </div>
    </form>
  </div>
}

export default Signup;