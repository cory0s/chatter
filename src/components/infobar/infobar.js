import React from "react";

import "./infobar.css";

const InfoBar = ({ room, users }) => {
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <h3>{room}</h3>
        <p>{users.length} members</p>
      </div>
      <div className="rightInnerContainer">
        <a href="/">Leave Room</a>
      </div>
    </div>
  );
};

export default InfoBar;
