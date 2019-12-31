import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import JoinSelect from '../joinSelect/joinSelect'

import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

import './join.css';

// const ENDPOINT = 'http://localhost:8000';
// const config = {
//     headers: {'Access-Control-Allow-Origin': '*'}
// };

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [rooms, setRooms] = useState([]);

    // useEffect(() => {
    //     axios.get(ENDPOINT, config)
    //       .then(res => {
    //         console.log('AXIOS', res);
    //         const rooms = res.data;
    //         setRooms([...rooms]);
    //       })
    // });

    return(
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading">Join the Chatter!</h1>
                <form>
                    <div className="joinInput">
                        <Input placeholder="Enter your name" className="joinInput" type="text" onChange={(e)=> setName(e.target.value) } required/>
                        <Input placeholder="Enter your room" className="joinInput mt-20" type="text" onChange={(e) => setRoom(e.target.value)} required/>
                        <Link 
                            onClick={(e) => (!name || !room) ? e.preventDefault() : null}
                            to={`/chat?name=${name}&room=${room}`}>
                            <Button className="button" variant="contained" color="primary">
                                Create a Chat
                            </Button>
                        </Link>
                        <p>OR</p>
                        <JoinSelect rooms={rooms}/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Join;