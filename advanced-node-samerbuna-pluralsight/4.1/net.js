const server = require("net").createServer();

// event listner when connection is emmited
server.on("connection", (socket) => {
  console.log("Server connected...");
  // respond to the client
  socket.write("Welcome new client!\n");
  // deal with the data ( the data is a buffer object)
  socket.on("data", (data) => {
    console.log("data is:", data);
    socket.write("data is: ");
    socket.write(data);
  });

  // socket.setEncoding('utf8')
});

// listen to localhost on port 8000
server.listen(8000, () => console.log("Server listening on 8000"));
