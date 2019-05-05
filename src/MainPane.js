import React from 'react'
import Cell from './Cell'
import processGameData from './GameModule'

class MainPane extends React.Component {

	state = {
		mapSize: { numRow: 7, numCol: 7 },
		mapData: this.createPlayMap(7, 7),
		playerTurn: 1,
		currData: {}
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
			// rows.push(<CreateRow key={i} numRow={i} numCol={numCol}/>);
			rows.push(this.createRow(i, numCol));
		}
		return 	<table className='mainpane' onClick={this.onMainPaneClick} style={{margin: '0 auto'}}>
					<tbody>{rows}</tbody>
				</table>
	}

	onMainPaneClick = (event) => {
		var mainPanePos = document.getElementsByClassName('mainpane')[0].getBoundingClientRect();
        var xPos = Math.floor((event.clientY-mainPanePos.y)/(mainPanePos.height/this.state.mapSize.numRow));
		var yPos = Math.floor((event.clientX-mainPanePos.x)/(mainPanePos.width/this.state.mapSize.numCol));
		if (this.state.mapData[xPos*this.state.mapSize.numCol+yPos].status === this.state.playerTurn) {
			this.setState({
				currData: this.state.mapData[xPos*this.state.mapSize.numCol+yPos] 
			}, () => {
				let rst = processGameData({ x: xPos, y: yPos }, this.state.mapData, this.state.currData, this.state.playerTurn)
				this.setState({
					mapData: rst.md,
					playerTurn: rst.pt
				});	
			});
		} else {
			let rst = processGameData({ x: xPos, y: yPos }, this.state.mapData, this.state.currData, this.state.playerTurn)
			this.setState({
				mapData: rst.md,
				playerTurn: rst.pt
			});
		}
	}
 
    render() {
        return <div>
		{this.createMap(this.state.mapSize.numRow,this.state.mapSize.numCol)}
		</div>
    }
}

export default MainPane
