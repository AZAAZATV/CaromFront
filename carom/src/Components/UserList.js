import React from "react";
import './UserList.scss';

function UserList() {
  return <div className="userlist">
    <div className="lists">
      <div className="list">
        <span>1</span>
        <div className="users">
          <div className="user">사람1</div>
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