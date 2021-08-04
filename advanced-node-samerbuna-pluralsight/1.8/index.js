// let exports = module.exports;

// exports.id = 1; // this is ok
//
// exports = { id: 1 }; // this is not ok
//
// module.exports = { id: 1 }; // this is ok
//
// // WHY??
//
// var g = 42; // local to this file.

// All of this happen because our file index.js is wrapped in the following function 
// function (require, exports, module, _filename, _dirname){}

////////////////////////
// we can even mock require function as below 
// require = function() {
//   return { mocked: true };
// };
//
// const fs = require('fs');
// console.log(fs);

/////////////////////////
// below example to explore the require function

// const printStars = require('./printStars');
// printStars(10, 'Hi!');


/////////////////////////////
// below example to demonstrate module cache

// node caches any required module, and does not excute it again if it was called again in any other file
// if we don't want to cache it, we can remove it from the cache as below

// console.log(require.cache);
// delete require.cache['/Users/samer/jscomplete/1.8/ascii-art.js']

// however, this is not a good solution, we can export the content of ascii-art as a function,
// then call it here. Now it will be exucted twice as we wanted 

require('./ascii-art')();
require('./ascii-art')();