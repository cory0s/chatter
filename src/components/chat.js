import React, { useEffect, useState } from 'react';
// import { joinRoom, leaveRoom } from '../api/api'
import io from 'socket.io-client';
import queryString from 'query-string';

let socket;

const Chat = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const ENDPOINT = 'localhost:8000';
    
    useEffect(() => {
        const { name, room } = queryString.parse(window.location.search);

        socket = io(ENDPOINT);
        setName(name);
        setRoom(room);
        console.log(socket);
        
    }, [ENDPOINT, window.location.search]);

    return(
        <h1>Hello from CHATTER</h1>
    )
}

export default Chat;