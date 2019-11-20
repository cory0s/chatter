import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { joinRoom, leaveRoom } from '../api/api'

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return(
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading">Join the Chat</h1>
                <div><input placeholder="Enter your name" className="joinInput" type="text" onChange={(e)=> setName(e.target.value) }></input></div>
                <div><input placeholder="Enter your room" className="joinInput mt-20" type="text" onChange={(e) => setRoom(e.target.value)}></input></div>
            <Link>
                <button className="button mt-20" type="submit">Sign In</button>
            </Link>
            </div>

        </div>
    )
}

export default Join;