//This file isn`t transpiled, so must use CommonJS and ES6

//Register babel to transpile before run our test
require('babel-register')();

//Disable webpack features that Mocha doesn`t understand
require.extensions['css'] = function() {}; //See css as empty function
