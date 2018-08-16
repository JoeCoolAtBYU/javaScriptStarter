//This file isn't transpiled, so must use CommonJS and ES5

//Register bable to transpile before our tests run.
require('babel-register')();

//Disable webpack features the Mocha doesn't understand.
require.extensions['.css'] = function () {
};

