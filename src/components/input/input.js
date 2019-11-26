import React from 'react';

import './input.css';

const Input = ({ message, setMessage, sendMessage }) => {
    return(
        <div className="form">
            <input 
            className="input"
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={(e)=> setMessage}
            />
            <button className="sendButton" onClick={(e) => sendMessage(e)}>Send</button>
        </div>
    )
}

export default Input;