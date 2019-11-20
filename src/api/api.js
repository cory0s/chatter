import openSocket from 'socket.io-client';

function joinRoom(cb){
    const socket = openSocket('http://localhost:8000');
    socket.on('join', data => cb(null, data));
    // socket.emit('')
}

function leaveRoom(){
    // socket.emit('disconnect')
}

export { joinRoom, leaveRoom };