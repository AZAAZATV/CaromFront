import React, { useEffect, useState } from "react";
import './UserList.scss';
import axios from "axios";

function UserList(props) {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const asdf = async () => {
    try {
      const data1 = await axios({
        url: `http://10.82.18.67:8080/apply/applyinfolist`,
        method: 'get'
      })
      const data2 = await axios({
        url: 'http://10.82.18.67:8080/apply/applyinfolist2',
        method: 'get',
      });
      // console.log(data1.data, data2.data);
      setData1(data1.data);
      setData2(data2.data);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    asdf();
  }, []);
  return <div className="userlist">
    <div className="lists">
      <div className="list">
        <span>1</span>
        <div className="users">
          {data1.map((i, n) => {
            if (n < 4) {
              return <div className="user" key={n}>
                <span>{i.name} </span>
                <span>{i.class}</span>
              </div>;
            }
          })}
        </div>
      </div>
      <div className="list">
        <span>2</span>
        <div className="users">
          {data2.map((i, n) => {
            if (n < 4) {
              return <div className="user" key={n}>
                <span>{i.name} </span>
                <span>{i.class}</span>
              </div>;
            }
          })}
        </div>
      </div>
    </div>
  </div>;
}

export default UserList;