import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';


import './joinSelect.css';


// const rooms = ['test', '1', '2', 3];

const JoinSelect = ({ rooms }) => {

    const handleChange = (e) => {
        console.log(e.target.value);
    }
 
    return(
        <FormControl className="existing-room-form">
            <InputLabel>Join an Existing Room</InputLabel>
            <Select
                id="existing-room"
                required
                value=''
                onChange={handleChange}
            >
                {rooms.map(option => (
                    <MenuItem key={option} value={option}>
                    {option}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default JoinSelect;