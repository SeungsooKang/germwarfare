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
		default:
			mapData[ clickPos.x * numCol + clickPos.y ].status = currData.status;
			infectNextCells(clickPos, mapData, currData); 
			mapData[ currData.row * numCol + currData.col ].status = 0;
			playerTurn = (playerTurn === 1) ? 2 : 1;
			clearBgStatus(mapData);
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
		if (twoNext.findIndex(e => ( e.x === data.row && e.y === data.col ))!== -1 && data.status === 0) { data.bgStatus = 2 }
		if (oneNext.findIndex(e => ( e.x === data.row && e.y === data.col ))!== -1 && data.status === 0) { data.bgStatus = 1 }
		return data;
	});
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

	return { md: mapData, pt: playerTurn};
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
