// you first should run create-big-file script to create a big file
// 2 approaches to read a file, then respond with it
// 1) fs.readFile: it is less memory effecient as it allocates all the file size in memory in filezzzzz variable. if the file is more than 2GB which is node buffer size, it will crash
// 2) fs.createReadStream, it only loads

const server = require("http").createServer();
const fs = require("fs");

server.on("request", (req, res) => {
  // const filezzzzz = fs.readFile("./7.1/big-file", (err, data) => {
  //   if (err) {
  //     throw err;
  //   }
  //   res.end(data);
  // });

  const src = fs.createReadStream("./7.1/big-file");
  src.pipe(res);
});

server.listen(3000, () => {
  console.log(process.pid);
  console.log("===========================");
  console.log("Server started on port 3000");
});
