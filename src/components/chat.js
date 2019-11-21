import React, { useEffect, useState } from 'react';
// import { joinRoom, leaveRoom } from '../api/api'
import io from 'socket.io-client';
import queryString from 'query-string';

let socket;

const Chat = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const ENDPOINT = 'localhost:8000';
    
    useEffect(() => {
        const { name, room } = queryString.parse(location.search);

        socket = io(ENDPOINT);
        setName(name);
        setRoom(room);
        console.log(socket);

        socket.emit('join', {name, room});

        return () => {
            socket.emit('disconnect');
            socket.off();
        }

    }, [ENDPOINT, location.search]); //WHY DOUBLE RENDER W/O ENDPOINT?

    return(
        <h1>Hello from CHATTER</h1>
    )
}

export default Chat;