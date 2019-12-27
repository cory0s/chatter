import React from 'react';
import './rooms.css';

const Rooms = ({ rooms }) => {

    return(
        <div className="roomList">
            <h2>Other Existing Rooms</h2>
                {rooms.map((room, idx) => {
                    return <div key={idx}>{room}</div>
                })
                }
        </div>
    );
} 

export default Rooms;