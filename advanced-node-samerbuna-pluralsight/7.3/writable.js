// file to create a writable stream

const { Writable } = require("stream");

// writable stream that logs what is written to it
// outStream is equal to process.stdout
const outStream = new Writable({
  write(chunk, encoding, callback) {
    console.log(chunk.toString());
    callback();
  },
});



// here write from the readable stream stdin into writable stream outStream 
process.stdin.pipe(outStream);
