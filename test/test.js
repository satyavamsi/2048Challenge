var assert = require('assert');

const swipe = require('../js/swipe.js');
const placenew = require('../js/placenew.js');

describe('placenew Test', function () {
 
	  it('should not return same array', function () {

        console.log([
			[0, 0, 0, 0],
			[4, 2, 0, 0],
			[4, 4, 4, 0],
			[2, 0, 4, 0]
			]);
        assert.notEqual([
			[0, 0, 0, 0],
			[4, 2, 0, 0],
			[4, 4, 4, 0],
			[2, 0, 4, 0]
			].join(), placenew([
			[0, 0, 0, 0],
			[4, 2, 0, 0],
			[4, 4, 4, 0],
			[2, 0, 4, 0]
			]).updated_state.join());
    });

	  	
	  it('New tile should be either 2 or 4', function () {
	        console.log([
				[0, 0, 0, 0],
				[4, 2, 0, 0],
				[4, 4, 4, 0],
				[2, 0, 4, 0]
				]);
	        var newtile = placenew([
				[0, 0, 0, 0],
				[4, 2, 0, 0],
				[4, 4, 4, 0],
				[2, 0, 4, 0]
				]).newtile;
	        assert.notEqual(newtile,-1);
	    });

	

	
	  	
	  it('No new tile should be inserted', function () {
	        console.log([
				[2, 4, 4, 8],
				[4, 4, 4, 8],
				[4, 4, 4, 8],
				[2, 4, 4, 8]
				]);
	        var newtile = placenew([
				[2, 4, 4, 8],
				[4, 4, 4, 8],
				[4, 4, 4, 8],
				[2, 4, 4, 8]
				]).newtile;
	        assert.equal(newtile,-1);
	    });
	
	 
	  it('Should return same array', function () {
	  		console.log([
				[2, 4, 4, 8],
				[4, 4, 4, 8],
				[4, 4, 4, 8],
				[2, 4, 4, 8]
				]);	
	        assert.equal([
			[2, 4, 4, 8],
			[4, 4, 4, 8],
			[4, 4, 4, 8],
			[2, 4, 4, 8]
			].join(), placenew([
			[2, 4, 4, 8],
			[4, 4, 4, 8],
			[4, 4, 4, 8],
			[2, 4, 4, 8]
			]).updated_state.join());
	    });
});

describe('swipe Test', function () {
	it('Should return same array', function () {
	        assert.equal([
			[2, 4, 4, 2],
			[4, 8, 2, 8],
			[2, 2, 4, 4],
			[4, 4, 8, 8]
			].join(), swipe([
			[2, 4, 4, 2],
			[4, 8, 2, 8],
			[2, 2, 4, 4],
			[4, 4, 8, 8]
			],"UP").join());
	    });
	it('Left Swipe Check', function () {
	        assert.equal([
			[2, 8, 2, 0],
			[4, 8, 2, 8],
			[4, 8, 0, 0],
			[8, 16, 0, 0]
			].join(), swipe([
			[2, 4, 4, 2],
			[4, 8, 2, 8],
			[2, 2, 4, 4],
			[4, 4, 8, 8]
			],"LEFT").join());
	    });
	it('Right Swipe Check', function () {
	        assert.equal([
			[0, 2, 8, 2],
			[4, 8, 2, 8],
			[0, 0, 4, 8],
			[0, 0, 8, 16]
			].join(), swipe([
			[2, 4, 4, 2],
			[4, 8, 2, 8],
			[2, 2, 4, 4],
			[4, 4, 8, 8]
			],"RIGHT").join());
	    });
	it('Down Swipe Check', function () {
	        assert.equal([
			[2, 0, 0, 0],
			[4, 8, 4, 2],
			[2, 2, 2, 8],
			[4, 4, 8, 16]
			].join(), swipe([
			[2, 4, 4, 2],
			[4, 4, 2, 8],
			[2, 2, 0, 8],
			[4, 4, 8, 8]
			],"DOWN").join());
	    });
	it('Up Swipe Check', function () {
	        assert.equal([
			[2, 8, 4, 2],
			[4, 2, 2, 16],
			[2, 4, 8, 8],
			[4, 0, 0, 0]
			].join(), swipe([
			[2, 4, 4, 2],
			[4, 4, 2, 8],
			[2, 2, 0, 8],
			[4, 4, 8, 8]
			],"UP").join());
	    });
	it('Only one merge per move - UP', function () {
	        assert.equal([
			[8, 16, 2, 2],
			[8, 0, 4, 16],
			[0, 0, 8, 8],
			[0, 0, 0, 0]
			].join(), swipe([
			[4, 0, 2, 2],
			[4, 0, 4, 8],
			[8, 0, 0, 8],
			[0, 16, 8, 8]
			],"UP").join());
	    });
	it('Only one merge per move - DOWN', function () {
	        assert.equal([
			[0, 0, 0, 0],
			[0, 0, 2, 2],
			[8, 0, 4, 8],
			[8, 16, 8, 16]
			].join(), swipe([
			[4, 0, 2, 2],
			[4, 0, 4, 8],
			[8, 0, 0, 8],
			[0, 16, 8, 8]
			],"DOWN").join());
	    });
	it('Only one merge per move - LEFT', function () {
	        assert.equal([
			[4, 4, 0, 0],
			[8, 8, 0, 0],
			[16, 0, 0, 0],
			[16, 16, 0, 0]
			].join(), swipe([
			[4, 0, 2, 2],
			[4, 0, 4, 8],
			[8, 0, 0, 8],
			[0, 16, 8, 8]
			],"LEFT").join());
	    });
	it('Only one merge per move - RIGHT', function () {
	        assert.equal([
			[0, 0, 4, 4],
			[0, 0, 8, 8],
			[0, 0, 0, 16],
			[0, 0, 16, 16]
			].join(), swipe([
			[4, 0, 2, 2],
			[4, 0, 4, 8],
			[8, 0, 0, 8],
			[0, 16, 8, 8]
			],"RIGHT").join());
	    });
});	