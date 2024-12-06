const express = require("express");
const app = express();
let PORT = 5000;

const sendMail = require("./sendMail")

app.get("/", (req, res) => {
  res.send("Server start");
});

app.get("/Mail", sendMail);

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`${PORT} live on 5000`);
    });
  } catch (error) {}
};
start();