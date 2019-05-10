import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		modal: false
		};

		this.toggle = this.toggle.bind(this);
	}

	toggle() {
		this.setState(prevState => ({
		modal: !prevState.modal
		}));
	}

	reloadVsPlayer = () => {
		window.location.assign("./#/vsplayer");
		window.location.reload();
	}

	reloadVsComputer = () => {
		window.location.assign("./#/vscomputer");
		window.location.reload();
	}

	render() {
		let gameResult = this.props.playmode === 0 ? 	
				<div>
					<p>Player1: {this.props.countP1}</p>
					<p>Player2: {this.props.countP2}</p>
				</div> :
				<div>
					<p>Player: {this.props.countP1}</p>
					<p>Computer: {this.props.countP2}</p>
				</div>
		return (
		<div>
			<Modal isOpen={this.props.isOpen} toggle={this.toggle} className={this.props.className}>
				<ModalHeader>
					{ this.props.playmode === 0 ? 
						this.props.countP1 > this.props.countP2 ? 'Player1 won!' : 'Player2 won!' :
						this.props.countP1 > this.props.countP2 ? 'Player won!'  : 'Computer won!' 
					}
				</ModalHeader>
				<ModalBody>
					{gameResult}
				</ModalBody>
				<ModalFooter>
					{ this.props.playmode === 0 ? 
						<Button color="primary" onClick={this.reloadVsPlayer}>Ok</Button> :
						<Button color="primary" onClick={this.reloadVsComputer}>Ok</Button>
					}
				</ModalFooter>
			</Modal>
		</div>
		);
	}
}

export default ModalBox;