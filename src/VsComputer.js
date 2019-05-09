import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import MainPane from './MainPane'
import PlayerPane from './PlayerPane';
import ModalBox from './ModalBox';

class VsComputer extends React.Component {

	state = {
		count: {
			p1: 2,
			p2: 2
		},
		playMode: 1,		// 0: P vs P, 1: P vs C,
		gameStatus: { 
			isGameEnded: false,
			winner: null
		}
	}

	updateCountState = (ct) => {
		this.setState({
			count: ct
		}, () => { 
			this.setState({
				gameStatus: { isGameEnded: this.state.count.p1 === 0 || this.state.count.p2 === 0 || this.state.count.p1 + this.state.count.p2 === 47,
				winner: this.state.count.p1 > this.state.count.p2 ? 1 : 2 }
			})
		})
	};

    render(){
        return (
			<div>
				<Container> 
					<Row>
						<Col xs="3"><PlayerPane playerid={this.state.playMode === 0 ? 'Player1' : 'Player'} status={1} count={this.state.count.p1}/></Col>          
						<Col xs="6">
							<MainPane updateCellCount={this.updateCountState} playmode={this.state.playMode} gameEnd={this.state.gameStatus.isGameEnded}/>
						</Col>
						<Col xs="3"><PlayerPane playerid={this.state.playMode === 0 ? 'Player2' : 'Computer'} status={2} count={this.state.count.p2}/></Col>
					</Row>
				</Container>
				<ModalBox isOpen={this.state.gameStatus.isGameEnded} playmode={this.state.playMode} countP1={this.state.count.p1} countP2={this.state.count.p2}/>
			</div>
		)
	}
}
  
export default VsComputer;
