import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from 'reactstrap';
import './App.css';
import Menubar from './Menubar'
import VsPlayer from './VsPlayer';
import VsComputer from './VsComputer';
// import AlerLine from './AlertLine';

class App extends React.Component {

	// state = {
	// 	alertText: ''
	// }

	// updateAlertText = (line) => {
	// 	this.setState({
	// 		alertText: line
	// 	})
	// };

    render(){
		// let alertBox = this.state.alertText !== '' ? 
		// 	<Container style={{marginTop: '25px'}}> 
		// 		<AlerLine textline={this.state.alertText}/>
		// 	</Container> : null;
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
				{/* {alertBox} */}
			</div>
		)
	}
}
  
export default App;
