// when you need to request someting from any external website (instead of axios)

const http = require("http");

const request = http.request(
  {
    hostname: "www.google.com",
    method: 'GET'
  },
  (res) => {
    // res: http.IncommingMessage
    console.log(`statusCode =====`, res.statusCode);
    console.log("==========================================");
    console.log(`headers =====`, res.headers);

    res.on("data", (data) => {
      console.log(`data =============`, data.toString());
    });
  }
);

request.on("error", (err) => console.log(`err======================`, err));

request.end();
