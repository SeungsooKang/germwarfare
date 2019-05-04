import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './App.css';
import MainPane from './MainPane'

class App extends React.Component {

	componentDidMount() {
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
