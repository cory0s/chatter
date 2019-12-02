import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';

import Message from '../message/message.js';
import './messages.css';

const Messages = ({ messages, name }) => (
    <ScrollToBottom>
        {messages.map((message, idx) => 
            <div key={idx}>
                <Message message={message} name={name} />
            </div>
        )}
    </ScrollToBottom>
)

export default Messages;