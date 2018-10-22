
var game = new Vue({
  el: '#game',
  data: {
    board: Array(4).fill().map(() => Array(4).fill(0)),
    score: 0,
    gameOver: false,
    success: false
  },
  mounted() {
  		this.setupBoard() 
  },
  methods: {
  	
  	setupBoard: function () {
  		this.resetBoard()
  		this.registerControl()
  	},
    resetBoard: function () {
      this.board = Array(4).fill().map(() => Array(4).fill(0));
      var updated_board = placenew(this.board).updated_state
      updated_board = placenew(this.board).updated_state
      this.board = []
      this.board.push(...updated_board); 
      this.gameOver = false
      this.score = 0 
      this.success = false 
    },
    getDirection: function(key) {
    	if(key == 39){
    		return "RIGHT";
    	}else if(key == 37){
    		return "LEFT";
    	}else if(key == 38){
    		return "UP";
    	}else{
    		return "DOWN"
    	}
    },
    getEmptyCells : function (board) {
		var rows = board.length;
	    var cols = board[0].length;
		for (var row = 0; row < rows; row++) {
			for (var col = 0; col < cols; col++) {
				if (!board[row][col]) {
					return true;
				}
			}
		}
		return false;
	},
	changeGameState: function(key){
		var updated_board = swipe(this.board,this.getDirection(key))
            this.moved = updated_board.moved
            if(updated_board.success){
            	this.success = true
            }
            this.score += updated_board.score
            this.board = []
  		    this.board.push(...updated_board.updated_state);

        	if(this.moved){
        		var updated_board = placenew(this.board)
	    		if(updated_board.newtile == -1){
	    			this.gameOver = true
	    		}
            	this.board = []
            	this.board.push(...updated_board.updated_state);
        	}

          // Checking if any moves are there
        	if(!this.moved && !this.getEmptyCells(this.board)){
        		 var testMove = false;
             var size = this.board.length
             for(var i=0;i<size;i++){
                for(var j=0;j<size;j++){
                  if(i+1 <size){
                    if(this.board[i][j] == this.board[i+1][j]){
                      testMove = true;
                      break;
                    }
                  }
                  if(i-1 >= 0){
                    if(this.board[i][j] == this.board[i-1][j]){
                      testMove = true;
                      break;
                    }
                  }
                  if(j+1 <size){
                    if(this.board[i][j] == this.board[i][j+1]){
                      testMove = true;
                      break;
                    }
                  }
                  if(j-1 >= 0){
                    if(this.board[i][j] == this.board[i][j-1]){
                      testMove = true;
                      break;
                    }
                  }
                }
                if(testMove){
                  break;
                }
             }
             if(!testMove){
                this.gameOver = true;
              }
        	}
	},
    registerControl: function() {
        const validKeyCodes = [39, 37, 38, 40]
        document.addEventListener("keydown", (event) => {
          let key = event.which
          let moved = false;
          if (validKeyCodes.includes(key)) {
          	this.changeGameState(key)
          } else { return }
        })
      }


  }
})