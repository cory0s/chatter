import React from 'react';

import Emoji from './emoji/emoji';
import './input.css';

const Input = ({ message, setMessage, sendMessage }) => {
    return(
        <div className="message-form">
            <input 
                className="message-input"
                type="text"
                placeholder="Write something..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' ? sendMessage(e) : null}
            />
            {/* <Emoji /> */}
            <button className="sendButton" onClick={(e) => sendMessage(e)}>Send</button>
        </div>
    )
}

export default Input;