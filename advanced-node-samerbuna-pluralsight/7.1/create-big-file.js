// this script to create a big file using streams

const fs = require("fs");
const bigFile = fs.createWriteStream("./7.1/big-file");

for (let i = 0; i <= 1e6; i++) {
  bigFile.write(
    "this is a big file created by a script in create-big-file.js. It is the start video in streams section in the course\n"
  );
}
