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
		}
	}

	updateCountState = (ct) => {
		this.setState({
			count: ct
		})
	};

    render(){
        return (
			<div>
				<Container style={{marginBottom: '25px'}}> 
					<Menubar/>
				</Container>
				<Container> 
					<Row>
						<Col xs="3"><PlayerPane playerid='Player1' status={1} count={this.state.count.p1}/></Col>          
						<Col xs="6">
							<MainPane updateCellCount={this.updateCountState}/>
						</Col>
						<Col xs="3"><PlayerPane playerid='Player2' status={2} count={this.state.count.p2}/></Col>
					</Row>
				</Container>
			</div>
		)
	}
}
  
export default App;
