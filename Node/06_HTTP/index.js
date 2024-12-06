// HTTP Server

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  //   console.log(req.url);
  if (req.url == "/") {
    res.end("this is home page");
  } else if (req.url == "/about") {
    res.end("this is about page");
  } else if (req.url == "/user") {
    res.end("this is user section");
  } else if (req.url == "/userAPI") {
    fs.readFile(`${__dirname}/UserAPI/userapi.json`, "utf-8", (err, data) => {
      const objData = JSON.parse(data)
      console.log(objData[0])
      res.end(objData[2].title);
    });
  } else {
    res.writeHead(404, { "content-type": "type/html" });
    res.end("<h1> 404 page not found</h1>");
  }
});

server.listen(9400, "127.0.0.1", () => {
  console.log("listening to port");
});




