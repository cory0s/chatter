import React from "react";
import ReactEmoji from 'react-emoji';
import "./message.css";

const Message = ({ message: { user, text, date }, name }) => {
  let isSentByCurrentUser = false;

  let trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div className="messageContainer justifyEnd">
      <div className="messageInfo">
        <p className="sentText">{trimmedName}</p>
        <p className="dateText">{date}</p>
      </div>
      <div className="messageBox backgroundBlue">
        <p className="messageText">{text}</p>
      </div>
    </div>
  ) : (
    <div className="messageContainer justifyStart">
      <div className="messageInfo">
        <p className="sentText pl-10">{user}</p>
        <p className="dateText">{date}</p>
      </div>
      <div className="messageBox backgroundLight">
        <p className="messageText colorDark">{text}</p>
      </div>
    </div>
  );
};

export default Message;