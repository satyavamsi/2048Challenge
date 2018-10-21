# 2048Challenge

This is 2048 game implemented using Vue as front-end

Clone the project and open index.html and play

This project includes two main functions for game play
 1.placenew.js // for adding a new tile
 2.swipe.js    // for handling movement

I have written test cases for these functions in mocha
 1. npm install 
 2. npm test
 
Algorithm used for merging:
1. when two tiles are merged I made the previous tile in the direction swiped as -1
2. so when a new tile with the same value is moved it will stop at -1 tile and stop
   it from merging again making one merge per move
ex: 
[0,8,4,4] ----->swiped right----> [0,8,-1,8] -----> [0,0,8,8]
