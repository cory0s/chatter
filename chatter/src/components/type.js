import React from 'react';

class Type extends React.Component{


    render(){
        return(
            <div className="typing-container">
                <div id="typing-bar">
                    Typing area
                </div>
                <button>Send</button>
            </div>
        )
    }
}

export default Type;