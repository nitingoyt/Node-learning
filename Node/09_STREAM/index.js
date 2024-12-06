const fs = require("fs");
const http = require("http");
const server = http.createServer();

server.on("request", (req, res) => {
  fs.readFile("input.txt", (err, data) => {
    // if (err) return console.log(err)
    // res.end(data.toString())

    // using Stream module
    // const rstream = fs.createReadStream("input.txt");
    // rstream.on("data", (chunkdata) => {
    //   res.write(chunkdata);
    // });
    // rstream.on("end", () => {
    //   res.end("");
    // });
    // rstream.on("error", () => {
    //   res.end("file does not exist");
    // });

    // Pipe method
    const rstream = fs.createReadStream("input.txt");
    rstream.pipe(res);
  });
});

server.listen(9400, "127.0.0.1");
