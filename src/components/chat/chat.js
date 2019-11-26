import React, { useEffect, useState } from 'react';
// import { joinRoom, leaveRoom } from '../api/api'
import io from 'socket.io-client';
import queryString from 'query-string';

import InfoBar from '../infobar/infobar';
import Input from '../input/input'

import './chat.css';

let socket;

const Chat = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const ENDPOINT = 'localhost:8000';
    
    useEffect(() => {
        const { name, room } = queryString.parse(location.search);

        socket = io(ENDPOINT);
        setName(name);
        setRoom(room);

        socket.emit('join', { name, room }, () => {

        });

        return () => {
            socket.emit('disconnect');
            socket.off();
        }

    }, [ENDPOINT, location.search]);

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message]);
        }, [messages]);
    });

    const sendMessage = (event) => {
        event.preventDefault();

        if(message){
            socket.emit('sendMessage', message, () => {
                setMessage('');
            });
        }
    }

    console.log('messages:', message, messages);

    return(
        <div className="outerContainer">
            <div className="container">
            <h1>Hello from CHATTER</h1>
            <InfoBar room={room}/>
            <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
            {/* <input 
            value={message} 
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' ? sendMessage(e) : null}
            /> */}
            </div>
        </div>
    )
}

export default Chat;