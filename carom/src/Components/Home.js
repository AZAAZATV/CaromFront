import React, { useState, useEffect } from "react";
import "./Home.scss";
import moment from 'moment';
import 'moment/locale/ko';
import Notice from "./Notice";

function Home() {
  const [clock, setClock] = useState();
  useEffect(() => {
    const id = setInterval(() => {
      setClock(moment().format('hh:mm:ss'));
    }, 1);
    return (() => clearInterval(id));
  }, []);
  return <div className="Home">
    <div className="join">
      <div className="oneteam">
        <p>1팀</p>
        <div className="onepeople">
          0/4
        </div>
        <button>신청하기</button>
      </div>

      <div className="twoteam">
        <p>2팀</p>
        <div className="twopeople">
          0/4
        </div>
        <button>신청하기</button>
      </div>
    </div>

    <div className="rule">
      <p>현재시간!</p>
      <div className="now">
        {clock}
      </div>
    </div>
    <Notice />
  </div>;
}



export default Home;