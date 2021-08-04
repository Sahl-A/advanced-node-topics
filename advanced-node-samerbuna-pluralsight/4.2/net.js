// barebone chat server 

const server = require("net").createServer();

// add object to add all sockets to it
// so we can loop through them below and write any data sent from any socket to the others 
const sockets = {};
let counter = 0;

server.on("connection", (socket) => {
  console.log("Client connected");
  socket.id = counter++;
  sockets[socket.id] = socket;

  socket.on("data", (data) => {
    // loop throgh all sockets and write the data comming from 
    Object.entries(sockets).forEach(([, cs]) => {
      cs.write(`${socket.id}: `);
      cs.write(data);
    });
  });
});

server.listen(8000, () => console.log("Server listenning on port 8000"));
