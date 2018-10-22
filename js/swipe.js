// function to handle swipe events

let swipe = (board,direction) => {

	let moved = false;
	let score = 0;
	let success = false;

	let findFarthestPosition =  (cell, vector) => {
		var previous;
		do {
			previous = cell;
			cell = {
				row: previous.row + vector.x,
				col: previous.col + vector.y
			};		

		} while (withinBounds(cell) && !board[cell.row][cell.col] && board[cell.row][cell.col] != -1);

		return {
			farthest: previous,
			next: cell 
		};
	};

	let getVector = (direction) => {
		var map = {
			"UP": {
				x: -1,
				y: 0
			},
			"RIGHT": {
				x: 0,
				y: 1
			},
			"DOWN": {
				x: 1,
				y: 0
			},
			"LEFT": {
				x: 0,
				y: -1
			}
		};

		return map[direction];
	};	


	let directionVectors = (vector) => {
		var directions = {
			x: [],
			y: []
		};
		var	size = board.length;

		for (var pos = 0; pos < size; pos++) {
			directions.x.push(pos);
			directions.y.push(pos);
		}

		// Start from the farthest cell in the chosen direction
		if (vector.x === 1) directions.x = directions.x.reverse();
		if (vector.y === 1) directions.y = directions.y.reverse();

		return directions;
	};

	let moveCell = (cell, position) => {
		if (cell.row === position.row && cell.col === position.col) {
			return ;
		} else {
			moved = true;		
			board[position.row][position.col] = board[cell.row][cell.col];
			board[cell.row][cell.col] = 0;
			return ;
		}

	};

	let mergeCells = (curr, next) => {
		board[next.row][next.col] = board[curr.row][curr.col]*2;
		if(board[next.row][next.col] == 2048){
			success = true
		}
		score += board[next.row][next.col];
		// below line will create a barrier for the next move that is 
		// even if there is a matching cell it won't cross this cell
		// so it ensures only one merge is possible
		moved = true;
		board[next.row - vector.x][next.col -vector.y] = -1; 
		if(!(next.row - vector.x == curr.row && next.col - vector.y == curr.col)){
			board[curr.row][curr.col] = 0;
		}
	};

	let withinBounds = (position) => {
		var size = board.length;
		return position.row >= 0 && position.row < size && position.col >= 0 && position.col < size;
	};

	var vector = getVector(direction);
	var directions = directionVectors(vector);
	
	directions.x.forEach((row) => {
		directions.y.forEach((col) => {

			if (board[row][col] && board[row][col] !== -1 ) {
				
				var currCell = {
					row: row,	
					col: col
				};

				var positions = findFarthestPosition({
					row: row ,
					col: col
				}, vector);

				var next = null;

				if(withinBounds(positions.next)){
				 	next = {
							row: positions.next.row,
							col: positions.next.col
						};
				}

				
				if (next != null && board[positions.next.row][positions.next.col] === board[row][col]) {
					mergeCells(currCell, next);
				}else {
					var destCell = positions.farthest;

					// checking if merge occured and overwriting '-1' set during previous merge
					if(next != null && board[positions.next.row][positions.next.col] == -1){
						destCell.row = 	positions.next.row;
						destCell.col =  positions.next.col;
					}
					moveCell(currCell, destCell);
				}	
			}

		});
	});

	for(var row=0; row < board.length; row++){
		for(var col=0; col < board[0].length; col++){
			if(board[row][col] == -1){
				board[row][col] = 0;
			}
			if(board[next.row][next.col] == 2048){
				success = true;
			}
		}
	}

	return {updated_state: board,
	 		moved : moved, 
	 		score: score,
			success: success};
};

module.exports = swipe;

