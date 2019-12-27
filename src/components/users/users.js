import React from 'react';
import './users.css';

const Users = ({ users }) => {

    return(
        <div className="userList">
            <h2>Current Members</h2>
            {users.map((user, idx) => {
                return <div key={idx}>{user.name}</div>
            })
            }
        </div>
    );
} 

export default Users;