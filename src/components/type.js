import React from 'react';

var divStyle = {
    color: 'black',
    display: 'flex',
  };

class Type extends React.Component{

    render(){
        return(
            <div className="typing-container" style={divStyle}>
                <div id="typing-bar">
                    <form>
                        <input type="text" id="type-text"></input>
                    </form>
                </div>
                <button>Send</button>
            </div>
        )
    }
}

export default Type;