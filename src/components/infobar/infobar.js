import React from 'react';

import './infobar.css';

const InfoBar = ({ room }) => {
    return(
        <div className="infoBar">
            <div className="leftInnerContainer">
                {/* <img className="onlineIcon" src={onlineIcon} alt="online"/> */}
            <h3>{room}</h3>
            </div>
            <div className="rightInnerContainer">
                <a href="/">Leave Room</a>
            </div>
        </div>
    )
}

export default InfoBar;