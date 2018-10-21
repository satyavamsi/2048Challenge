// function to place new cell

let placenew = (board) => {

  // function to fetch available empty cells
	let getEmptyCells = ()=> {
		var emptyCells = [];
		var rows = board.length;
	    var cols = board[0].length;

		for (var row = 0; row < rows; row++) {
			for (var col = 0; col < cols; col++) {
				if (!board[row][col]) {
					emptyCells.push({
						row: row,
						col: col
					});
				}
			}
		}

		return emptyCells;
	};

	// getting empty cells
	var emptyCells = getEmptyCells(); 

	// setting default value of new tile
	var newtile = -1; 

	// if cells are empty
	if (emptyCells.length > 0) {
		newtile = Math.random() < 0.7 ? 2 : 4;
		var randomCell = emptyCells[Math.floor(Math.random()*emptyCells.length)];
	    board[randomCell.row][randomCell.col] = newtile;
		return {updated_state: board, newtile: newtile};
	}

	// if cells are not empty
	return {updated_state: board, newtile: newtile};

 };


