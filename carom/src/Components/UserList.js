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
      console.log(data1.data);
      setData1(data1.data);
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
          {data1.map((i, n) =>
            <div className="user" key={n}>
              <span>{i.name}</span>
              <span>{i.class}</span>
            </div>
          )}
        </div>
      </div>
      <div className="list">
        <span>2</span>
        <div className="users">
          <div className='user'></div>
        </div>
      </div>
    </div>
  </div>;
}

export default UserList;