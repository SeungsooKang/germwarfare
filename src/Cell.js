import React from 'react'

const playerColor = ['white', 'red', 'blue'];
const bgColor = ['white', '#f4a688', '#fff2df', '#ffff99'];

class Cell extends React.Component {

    render() {

        var boxStyle = {
            width: '60px',
            height: '60px',
            padding: '5%',
            border: '1px solid #c8c3cc',
            background: bgColor[this.props.bgStatus]
        };
    
        var circleStyle = {
            width: '50px',
            height: '50px',
            WebkitBorderRadius: '25px',
            MozBorderRadius: '25px',
            borderRadius: '25px',
            background: playerColor[this.props.status],
            margin: '0 auto'
        };

        return (
            <div className='cell' style={boxStyle}>
                { this.props.status !== 0 ? <div style={circleStyle}></div> : '' }
            </div>
        );
    }
}

export default Cell
