import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './App.css';
import MainPane from './MainPane'
import Cell from './Cell'

function App() {
  return (
    <Container fluid> 
      <Row>
        <Col xs="3">
          <Cell status={0} bgStatus={2}/>
          <Cell/>

        </Col>
          
        <Col xs="6">
            <MainPane/>
        </Col>
        <Col xs="3">.col-3</Col>
      </Row>
    </Container>
  );
}
  
export default App;
  