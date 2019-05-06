import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from 'reactstrap';
import './App.css';
import Menubar from './Menubar'
import VsPlayer from './VsPlayer';
import VsComputer from './VsComputer';

class App extends React.Component {

    render(){
        return (
			<div>
				<Container style={{marginBottom: '25px'}}> 
					<Menubar updatePlayMode={this.updatePlayModeState}/>
				</Container>
				<Router>
					<div>
						<Route exact path="/" component={VsPlayer} />
						<Route path="/vsplayer" component={VsPlayer} />
						<Route path="/vscomputer" component={VsComputer} />
					</div>
				</Router>
			</div>
		)
	}
}
  
export default App;
