import React from 'react';
import './users.css';

const Users = ({ users }) => {

    return(
        <div className="userList">
            {users.map((user, idx) => {
                return <div key={idx}>{user.name}</div>
            })
            }
        </div>
    );
} 

export default Users;