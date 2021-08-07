// file to create a readable stream

const { Readable } = require("stream");

// The below method is not so effecient as we read data that is added here,
// we want to read data with code (from A to Z)
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
// const readable = new Readable();
// readable.push("This is data added into readable stream");
// means we signal that the stream has no remaining data
// readable.push(null);
// consume the readable stream
// readable.pipe(process.stdout);
///////////////////////////////////////////
///////////////////////////////////////////
const inStream = new Readable({
  read(size) {
    setTimeout(() => {
      if (this.currentCharCode > 90) {
        this.push(null);
        return;
      }
      this.push(String.fromCharCode(this.currentCharCode++));
    }, 100);
  },
});

inStream.currentCharCode = 65;
inStream.pipe(process.stdout);

process.on("exit", () => {
  console.error(`\n\ncurrentCharCode is ${inStream.currentCharCode}`);
});
process.stdout.on("error", process.exit);


