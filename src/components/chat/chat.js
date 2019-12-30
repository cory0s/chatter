import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import queryString from 'query-string';

import InfoBar from '../infobar/infobar';
import Input from '../input/input';
import Messages from '../messages/messages';
import Users from '../users/users';
import Rooms from '../rooms/rooms';

import './chat.css';

let socket;

const Chat = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [users, setUsers] = useState([]);
    const [rooms, setRooms] = useState([]);

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

    // Update messages queue whenever new message is sent
    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message]);
        }, [messages]);
    });

    // Update users and rooms whenever new socket joins
    useEffect(() => {
        socket.on('roomData', (data) => {
            setUsers([...data.users]);
        }, [users]);
    });

    useEffect(() => {
        socket.on('allRoomData', (data) => {
            setRooms([...data.rooms]);
        }, [rooms]);
    });

    const sendMessage = (event) => {
        event.preventDefault();

        if(message){
            socket.emit('sendMessage', message, () => {
                setMessage('');
            });
        }
    }
    
    return(
        <div className="outerContainer">
            <div className="container">
                <div className="chatContainer">
                    <InfoBar room={room}/>
                    <Messages messages={messages} name={name}/>
                    <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
                </div>
                <div className="usersContainer">
                    <Users users={users}/>
                    <Rooms rooms={rooms} />
                </div>
            </div>
        </div>
    )
}

export default Chat;