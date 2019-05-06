import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import MainPane from './MainPane'
import PlayerPane from './PlayerPane';

class VsComputer extends React.Component {

	state = {
		count: {
			p1: 2,
			p2: 2
		},
		playMode: 1		// 0: P vs P, 1: P vs C
	}

	updateCountState = (ct) => {
		this.setState({
			count: ct
		})
	};

    render(){
        return (
			<div>
				<Container> 
					<Row>
						<Col xs="3"><PlayerPane playerid={this.state.playMode === 0 ? 'Player1' : 'Player'} status={1} count={this.state.count.p1}/></Col>          
						<Col xs="6">
							<MainPane updateCellCount={this.updateCountState} playmode={this.state.playMode}/>
						</Col>
						<Col xs="3"><PlayerPane playerid={this.state.playMode === 0 ? 'Player2' : 'Computer'} status={2} count={this.state.count.p2}/></Col>
					</Row>
				</Container>
			</div>
		)
	}
}
  
export default VsComputer;
