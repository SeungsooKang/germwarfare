import React from 'react'
import Cell from './Cell'
import processGameData from './GameModule'
import { playComputerTurn } from './GameModule'

const sleep = (milliseconds) => {
	return new Promise(resolve => setTimeout(resolve, milliseconds))
}

class MainPane extends React.Component {

	state = {
		mapSize: { numRow: 7, numCol: 7 },
		mapData: this.createPlayMap(7, 7),
		playerTurn: 1,
		currData: {},
		count: {},
		isPlayed: false
	}

	createPlayMap(numRow, numCol) {
		var mapDataArr = [];
		for(var i=0;i<numRow;i++){
			for(var j=0;j<numCol;j++){
				mapDataArr.push({
					row: i,
					col: j,
					status: 0,
					bgStatus: 0
				});
			}
		}
		// initial germs
		mapDataArr[0].status = 1;
		mapDataArr[numCol-1].status = 2;
		mapDataArr[numRow*numCol-numCol].status = 2;
		mapDataArr[numRow*numCol-1].status = 1;

		return mapDataArr;
	} 

	createRow = (numRow, numCol) => {
		var dataRow = (this.state.mapData).filter(data => data.row === numRow);
		var items = [];
		for (var i = 0; i < numCol; i++) {
			items.push(<td key={i}><Cell status={dataRow[i].status} bgStatus={dataRow[i].bgStatus} /></td>);
		}
		return <tr key={numRow}>{items}</tr>;
	}
	
	createMap = (numRow, numCol) => {
		var rows = [];
		for (var i = 0; i < numRow; i++) {
			rows.push(this.createRow(i, numCol));
		}
		return 	<table className='mainpane' onClick={this.onMainPaneClick} style={{margin: '0 auto'}}>
					<tbody>{rows}</tbody>
				</table>
	}

	onMainPaneClick = (event) => {
		let mainPanePos = document.getElementsByClassName('mainpane')[0].getBoundingClientRect();
        let xPos = Math.floor((event.clientY-mainPanePos.y)/(mainPanePos.height/this.state.mapSize.numRow));
		let yPos = Math.floor((event.clientX-mainPanePos.x)/(mainPanePos.width/this.state.mapSize.numCol));
		let prevplayerTurn = this.state.playerTurn;
		if (!this.props.gameEnd) this.processClickInput(xPos, yPos, prevplayerTurn);
	}

	processClickInput (xPos, yPos, prevplayerTurn) {
		if (this.state.mapData[xPos*this.state.mapSize.numCol+yPos].status === this.state.playerTurn) {
			this.setState({
				currData: this.state.mapData[xPos*this.state.mapSize.numCol+yPos] 
			}, () => {
				this.processInputPosition(xPos, yPos, prevplayerTurn);
			});
		} else {
			this.processInputPosition(xPos, yPos, prevplayerTurn);
		}
	}

	processInputPosition(xPos, yPos, prevplayerTurn) {
		let rst = processGameData({ x: xPos, y: yPos }, this.state.mapData, this.state.currData, this.state.playerTurn);
		this.setState({
			mapData: rst.md,
			playerTurn: rst.pt,
			count: rst.ct,
			isPlayed: prevplayerTurn !== rst.pt
		}, () => {
			this.props.updateCellCount(this.state.count);
			if (this.props.playmode === 1 && this.state.isPlayed && this.state.playerTurn === 2 && this.state.count.p2 !== 0) {
				let rst = playComputerTurn(this.state.mapData, this.state.playerTurn);
				sleep(500).then(() => { 
					this.setState({
						mapData: rst.md,
						playerTurn: rst.pt,
						count: rst.ct,
						isPlayed: prevplayerTurn !== rst.pt
					}, () => { this.props.updateCellCount(this.state.count) });
				});
			}
		});
	}

    render() {
        return <div>
		{this.createMap(this.state.mapSize.numRow,this.state.mapSize.numCol)}
		</div>
    }
}

export default MainPane
