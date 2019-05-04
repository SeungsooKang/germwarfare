import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './App.css';
import MainPane from './MainPane'

class App extends React.Component {

	static playMap = {
		mapSize: {},
		data: []
	}

	createPlayMap = (mapSize) => {
		App.playMap.mapSize = mapSize;
		for(var i=0;i<mapSize.numRow;i++){
			for(var j=0;j<mapSize.numCol;j++){
				App.playMap.data.push({
					row: i,
					col: j,
					status: 0,
					bgStatus: 0
				});
			}
		}
	} 

	constructor(props) {
		super(props);
		this.createPlayMap({ numRow: 7, numCol: 7 });
	}

	componentDidMount() {
		this.cellElements = document.getElementsByClassName('cell');
		console.log(this.cellElements);
	}

    render(){

        return (
            <Container fluid> 
              <Row>
                <Col xs="3">
                </Col>          
                <Col xs="6">
                <MainPane/>
                </Col>
                <Col xs="3">.col-3</Col>
              </Row>
            </Container>
		)
	}
}
  
export default App;
