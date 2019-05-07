function clickedBlankCell(clickPos, mapData, currData, playerTurn) {
	let numCol = mapData.filter(data => data.row === 0).length;
	let clickData = mapData[ clickPos.x * numCol + clickPos.y ];

	switch(clickData.bgStatus) {
		case 0:
			// No event
			break;
		case 1:
			mapData[ clickPos.x * numCol + clickPos.y ].status = currData.status;
			infectNextCells(clickPos, mapData, currData); 
			playerTurn = (playerTurn === 1) ? 2 : 1;
			clearBgStatus(mapData);
			break;
		case 2:
			mapData[ clickPos.x * numCol + clickPos.y ].status = currData.status;
			infectNextCells(clickPos, mapData, currData); 
			mapData[ currData.row * numCol + currData.col ].status = 0;
			playerTurn = (playerTurn === 1) ? 2 : 1;
			clearBgStatus(mapData);
			break;
		default:
	}
	return playerTurn;
}

function clickedRedCell(clickPos, mapData) {
	clearBgStatus(mapData);
	return markNextCells(clickPos, mapData);
}

function clickedBlueCell(clickPos, mapData) {
	clearBgStatus(mapData);
	return markNextCells(clickPos, mapData);
}

function infectNextCells(clickPos, mapData, currData) {
	let numRow = mapData.filter(data => data.col === 0).length;
	let numCol = mapData.filter(data => data.row === 0).length;
	let oneNext = findOneNextCell(clickPos, numRow, numCol);

	mapData.map(function(data){
		if (oneNext.findIndex(e => ( e.x === data.row && e.y === data.col ))!== -1 && data.status !== 0) { data.status = currData.status }
		return data;
	});
}

function clearBgStatus(mapData){
	mapData.map(function(data){
		data.bgStatus = 0;
		return data;
	});
}

function markNextCells(clickPos, mapData) {
	let numRow = mapData.filter(data => data.col === 0).length;
	let numCol = mapData.filter(data => data.row === 0).length;
	let oneNext = findOneNextCell(clickPos, numRow, numCol);
	let twoNext = findTwoNextCell(clickPos, numRow, numCol);

	mapData.map(function(data){
		if (clickPos.x === data.row && clickPos.y === data.col) { data.bgStatus = 3 }
		if (twoNext.findIndex(e => ( e.x === data.row && e.y === data.col ))!== -1 && data.status === 0) { data.bgStatus = 2 }
		if (oneNext.findIndex(e => ( e.x === data.row && e.y === data.col ))!== -1 && data.status === 0) { data.bgStatus = 1 }
		return data;
	});
}

function countCells(mapData) {
	let c1 = mapData.filter(data => data.status === 1).length;
	let c2 = mapData.filter(data => data.status === 2).length;
	return { p1: c1, p2: c2};
}

export default function processGameData(clickPos, mapData, currData, playerTurn) {
	let numCol = mapData.filter(data => data.row === 0).length;
	let clickData = mapData[ clickPos.x * numCol + clickPos.y ];

	switch(clickData.status) {
		case 0:
			playerTurn = clickedBlankCell(clickPos, mapData, currData, playerTurn);
			break;
		case 1:
			if (playerTurn === 1) clickedRedCell(clickPos, mapData);
			break;
		default:
			if (playerTurn === 2) clickedBlueCell(clickPos, mapData)
	  }
	
	let count = countCells(mapData);
	return { md: mapData, pt: playerTurn, ct: count };
}

export function playComputerTurn(mapData, playerTurn) {
	let cells = deepClone(mapData.filter(data => data.status === playerTurn));
	let simulationResult = [];
	
	cells.map(function(data){
		// deep clone
		let cloneMapData = deepClone(mapData);
		clickedBlueCell({ x: data.row, y: data.col }, cloneMapData)
		let nextCells = deepClone(cloneMapData.filter(e => e.bgStatus === 1 || e.bgStatus === 2));

		nextCells.map(function(cell){
			cloneMapData = deepClone(mapData);
			clickedBlueCell({ x: data.row, y: data.col }, cloneMapData)
			clickedBlankCell({ x: cell.row, y: cell.col }, cloneMapData, data, playerTurn);
			let count = countCells(cloneMapData);
			simulationResult.push({ mapData: cloneMapData, ct: count, diff: count.p2 - count.p1});
			return cell;
		})
		return data;
	});

	let maxDiff = Math.max.apply(Math, simulationResult.map(function(rst) { return rst.diff; }));
	let maxSimulationResult = simulationResult.filter(rst => rst.diff === maxDiff);
	let randomIndex = getRandomInt(maxSimulationResult.length);
	
	return { 
		md: maxSimulationResult[randomIndex].mapData, 
		pt: (playerTurn === 1) ? 2 : 1, 
		ct: maxSimulationResult[randomIndex].ct 
	};
}

function findOneNextCell(pos, numRow, numCol){
	let nextCells = [];
	nextCells.push({ x: Math.min(Math.max(pos.x -1, 0),numRow-1) , y: Math.min(Math.max(pos.y -1, 0),numCol-1) });
	nextCells.push({ x: Math.min(Math.max(pos.x -1, 0),numRow-1) , y: Math.min(Math.max(pos.y   , 0),numCol-1) });
	nextCells.push({ x: Math.min(Math.max(pos.x -1, 0),numRow-1) , y: Math.min(Math.max(pos.y +1, 0),numCol-1) });
	nextCells.push({ x: Math.min(Math.max(pos.x   , 0),numRow-1) , y: Math.min(Math.max(pos.y -1, 0),numCol-1) });
	nextCells.push({ x: Math.min(Math.max(pos.x   , 0),numRow-1) , y: Math.min(Math.max(pos.y +1, 0),numCol-1) });
	nextCells.push({ x: Math.min(Math.max(pos.x +1, 0),numRow-1) , y: Math.min(Math.max(pos.y -1, 0),numCol-1) });
	nextCells.push({ x: Math.min(Math.max(pos.x +1, 0),numRow-1) , y: Math.min(Math.max(pos.y   , 0),numCol-1) });
	nextCells.push({ x: Math.min(Math.max(pos.x +1, 0),numRow-1) , y: Math.min(Math.max(pos.y +1, 0),numCol-1) });
	return nextCells;
}

function findTwoNextCell(pos, numRow, numCol){
	let nextCells = [];
	nextCells.push({ x: Math.min(Math.max(pos.x -2, 0),numRow-1) , y: Math.min(Math.max(pos.y -2, 0),numCol-1) });
	nextCells.push({ x: Math.min(Math.max(pos.x -2, 0),numRow-1) , y: Math.min(Math.max(pos.y -1, 0),numCol-1) });
	nextCells.push({ x: Math.min(Math.max(pos.x -2, 0),numRow-1) , y: Math.min(Math.max(pos.y   , 0),numCol-1) });
	nextCells.push({ x: Math.min(Math.max(pos.x -2, 0),numRow-1) , y: Math.min(Math.max(pos.y +1, 0),numCol-1) });
	nextCells.push({ x: Math.min(Math.max(pos.x -2, 0),numRow-1) , y: Math.min(Math.max(pos.y +2, 0),numCol-1) });

	nextCells.push({ x: Math.min(Math.max(pos.x -1, 0),numRow-1) , y: Math.min(Math.max(pos.y -2, 0),numCol-1) });
	nextCells.push({ x: Math.min(Math.max(pos.x -1, 0),numRow-1) , y: Math.min(Math.max(pos.y +2, 0),numCol-1) });
	nextCells.push({ x: Math.min(Math.max(pos.x   , 0),numRow-1) , y: Math.min(Math.max(pos.y -2, 0),numCol-1) });
	nextCells.push({ x: Math.min(Math.max(pos.x   , 0),numRow-1) , y: Math.min(Math.max(pos.y +2, 0),numCol-1) });
	nextCells.push({ x: Math.min(Math.max(pos.x +1, 0),numRow-1) , y: Math.min(Math.max(pos.y -2, 0),numCol-1) });
	nextCells.push({ x: Math.min(Math.max(pos.x +1, 0),numRow-1) , y: Math.min(Math.max(pos.y +2, 0),numCol-1) });

	nextCells.push({ x: Math.min(Math.max(pos.x +2, 0),numRow-1) , y: Math.min(Math.max(pos.y -2, 0),numCol-1) });
	nextCells.push({ x: Math.min(Math.max(pos.x +2, 0),numRow-1) , y: Math.min(Math.max(pos.y -1, 0),numCol-1) });
	nextCells.push({ x: Math.min(Math.max(pos.x +2, 0),numRow-1) , y: Math.min(Math.max(pos.y   , 0),numCol-1) });
	nextCells.push({ x: Math.min(Math.max(pos.x +2, 0),numRow-1) , y: Math.min(Math.max(pos.y +1, 0),numCol-1) });
	nextCells.push({ x: Math.min(Math.max(pos.x +2, 0),numRow-1) , y: Math.min(Math.max(pos.y +2, 0),numCol-1) });
	return nextCells;
}

function deepClone(obj) {
	return JSON.parse(JSON.stringify(obj));
}

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}