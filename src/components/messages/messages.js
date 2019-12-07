import React from 'react';
import Message from '../message/message.js';
import './messages.css';
import ScrollToBottom from 'react-scroll-to-bottom';
// const ScrollToBottom = require('react-scroll-to-bottom');



const Messages = ({ messages, name }) => (
    <ScrollToBottom className="messages">
        {messages.map((message, idx) => 
            <div key={idx}>
                <Message message={message} name={name} />
            </div>
        )}
    </ScrollToBottom>
)

export default Messages;