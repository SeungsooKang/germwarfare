import React from 'react'
import { Jumbotron } from 'reactstrap';

class PlayerPane extends React.Component {

	state = {
		count: 2
	}

    render() {
		var style = {
            border: '1px solid #c8c3cc'
		};

		var circleStyle = {
            width: '50px',
            height: '50px',
            WebkitBorderRadius: '25px',
            MozBorderRadius: '25px',
            borderRadius: '25px',
            background: this.props.status === 1 ? 'red' : 'blue',
            margin: '0 auto'
        };
		
        return <div className="w-100 h-100" style={style}>
			<div className="h-50 d-flex justify-content-center align-items-center">
				<h1>{this.props.playerid}<div style={circleStyle}></div></h1>
			</div>
			<div className="h-50">
				<Jumbotron className="h-100 d-flex justify-content-center align-items-center">
					<p style={{fontSize:'90px'}}>{this.state.count}</p>
				</Jumbotron>
			</div>
		</div>
    }
}

export default PlayerPane
