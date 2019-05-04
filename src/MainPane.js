import React from 'react'
import Cell from './Cell'
import App from './App';

const CreateRow = ({numRow, numCol}) => {
	var dataRow = (App.playMap.data).filter(data => data.row === numRow);
    var items = [];
    for (var i = 0; i < numCol; i++) {
        items.push(<td key={i}><Cell status={dataRow[i].status} bgStatus={dataRow[i].bgStatus} /></td>);
    }
    return <tr>{items}</tr>;
}

const CreateMap = ({numRow, numCol}) => {
	var rows = [];
    for (var i = 0; i < numRow; i++) {
        rows.push(<CreateRow key={i} numRow={i} numCol={numCol}/>);
    }
    return 	<div>
        		<tbody>{rows}</tbody>
			</div>
}

class MainPane extends React.Component {

    mapSizeRow = App.playMap.mapSize.numRow;
	mapSizeCol = App.playMap.mapSize.numCol;
	
    componentDidMount() {
        
	}

	onMainPaneClick = (event) => {
		var mainPanePos = document.getElementsByClassName('mainpane')[0].getBoundingClientRect();
        var x = Math.floor((event.clientY-mainPanePos.y)/(mainPanePos.height/this.mapSizeRow));
		var y = Math.floor((event.clientX-mainPanePos.x)/(mainPanePos.width/this.mapSizeCol));
		App.playMap.data[x*7+y].status = 1;
		console.log(App.playMap.data);
		this.setState(this.state);
	}
 
    render() {
        return <table className='mainpane' onClick={this.onMainPaneClick}>
		<CreateMap numRow={this.mapSizeRow} numCol={this.mapSizeCol}/></table>;
    }
}

export default MainPane
