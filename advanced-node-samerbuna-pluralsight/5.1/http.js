// Create first basic server

const server = require('http').createServer();

server.on('request', (req, res) => {
  res.writeHead(200, { 'content-type': 'text/plain' });
  res.write('Hello world\n');

  setTimeout(function () {
    res.write('Another Hello world\n');
  }, 10000);

  setTimeout(function () {
    res.write('Yet Another Hello world\n');
  }, 20000);

  // if we don't use res.end()
  // the connection is not closed and it could send till it reaches the timeout of the server
  // we can change the server timeout as below
});

// change server timeout
// in such case the responses in setTimeout above will not be sent to the client 
server.timeout = 1000;

server.listen(3000, () => console.log("Server started on PORT 3000"));
