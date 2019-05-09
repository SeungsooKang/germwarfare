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

  render() {
	let gameResult = this.props.playmode === 0 ? 	
			<div>
				{ this.props.countP1 > this.props.countP2 ? <p>Player1 won!</p> : <p>Player2 won!</p> }
				<p>Player1: {this.props.countP1}</p>
				<p>Player2: {this.props.countP2}</p>
			</div> :
			<div>
				{ this.props.countP1 > this.props.countP2 ? <p>Player won!</p> : <p>Computer won!</p> }
				<p>Player: {this.props.countP1}</p>
				<p>Computer: {this.props.countP2}</p>
			</div>
    return (
      <div>
        <Modal isOpen={this.props.isOpen} toggle={this.toggle} className={this.props.className}>
			<ModalHeader>Germ Warfare</ModalHeader>
			<ModalBody>
				{gameResult}
			</ModalBody>
			<ModalFooter>
				{ this.props.playmode === 0 ? 
					<Button color="primary" onClick={this.toggle} href="/vsplayer">Ok</Button> :
					<Button color="primary" onClick={this.toggle} href="/vscomputer">Ok</Button>
				}
			</ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalBox;