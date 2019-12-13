import React from 'react';
import ReactEmoji from 'react-emoji';
import './message.css';

const Message = ({ message: { user, text }, name }) => {
    let isSentByCurrentUser = false;

    let trimmedName = name.trim().toLowerCase();

    if(user === trimmedName){
        isSentByCurrentUser = true;
    }

    return(
        isSentByCurrentUser ? 
        (<div className="messageContainer justifyEnd">
            <p className="sentText pr-10">{trimmedName}</p>
            <div className="messageBox backgroundBlue">
                <p className="messageText">{text}</p>
            </div>
        </div>)
        : 
        (<div className="messageContainer justifyStart">
            <p className="sentText pl-10">{user}</p>
            <div className="messageBox backgroundLight">
                <p className="messageText colorDark">{text}</p>
            </div>
        </div>)
    )
}

export default Message;