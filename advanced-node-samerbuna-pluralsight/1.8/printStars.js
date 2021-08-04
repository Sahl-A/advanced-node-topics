// This file to explore the require function more

// the printStars file can run as a script or it can be required

// As a script
// node printStars.js 5 hello

// Required in any file
// const NAME = require(PATH_TO_printStars.js)

const print = (starsCount, header) => {
  console.log(`*`.repeat(starsCount));
  console.log(header);
  console.log(`*`.repeat(starsCount));
};

if (require.main == module) {
  // Running as a script
  print(process.argv[2], process.argv[3]);
} else {
  // Being imported
  module.exports = print;
}
