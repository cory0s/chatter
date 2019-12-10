import React from 'react';
import ReactEmoji from 'react-emoji';
import './message.css';

const Message = ({ message: { user, text }, name }) => {
    let isSentByCurrentUser = false;

    const trimmedName = name.trim().toLowerCase();

    if(user.name === trimmedName){
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
            <div className="messageBox backgroundLight">
                <p className="sentText pl-10">{user}</p>
                <p className="messageText colorDark">{text}</p>
            </div>
        </div>)
    )
}

export default Message;