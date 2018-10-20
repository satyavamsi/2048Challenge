// import placenew from main.js;

var assert = require('assert');

const placenew = require('./js/placenew.js');
const swipe = require('./js/swipe.js');

let initial_state = [
[0, 0, 0, 0],
[4, 2, 0, 0],
[4, 4, 4, 0],
[2, 0, 4, 0],
];

let {updated_state, newtile} = placenew(initial_state);
console.log(updated_state);

let sinitial_state = [
[8, 0, 0, 0],
[4, 2, 0, 0],
[4, 0, 4, 0],
[2, 0, 4, 0],
];
let swiped_state = swipe(sinitial_state, "UP");
console.log(swiped_state);

describe('Basic Mocha String Test', function () {
 it('should return number of charachters in a string', function () {
        assert.equal("Hello".length, 4);
    });
 it('should return first charachter of the string', function () {
        assert.equal("Hello".charAt(0), 'H');
    });
});
