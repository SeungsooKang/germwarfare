import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './App.css';
import Menubar from './Menubar'
import MainPane from './MainPane'
import PlayerPane from './PlayerPane';

class App extends React.Component {

	state = {
		count: {
			p1: 2,
			p2: 2
		},
		playMode: 0		// 0: P vs P, 1: P vs C
	}

	updateCountState = (ct) => {
		this.setState({
			count: ct
		})
	};

	updatePlayModeState = (n) => {
		this.setState({
			playMode: n
		})
	};

    render(){
        return (
			<div>
				<Container style={{marginBottom: '25px'}}> 
					<Menubar updatePlayMode={this.updatePlayModeState}/>
				</Container>
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
  
export default App;
