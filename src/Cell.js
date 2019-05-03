import React from 'react'

class Cell extends React.Component {

    playerColor = ['white', 'red', 'blue'];
    bgColor = ['white', 'green', 'yellow'];

    state = { 
        status: this.props.status || 0,
        bgStatus: this.props.bgStatus || 0
    }
    
    boxStyle = {
        width: '60px',
        height: '60px',
        border: '1px solid black',
        background: this.bgColor[this.state.bgStatus]
    }
    
    circleStyle = {
        width: '50px',
        height: '50px',
        WebkitBorderRadius: '25px',
        MozBorderRadius: '25px',
        borderRadius: '25px',
        background: this.playerColor[this.state.status],
        margin: '0 auto'
    }
    
    render() {
        return (
            <div style={this.boxStyle}>
                { this.state.status !== 0 ? <div style={this.circleStyle}></div> : '' }
            </div>
        )
    }
}

export default Cell
