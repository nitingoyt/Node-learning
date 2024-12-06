const express = require("express");
const app = express();

app.get("/", (req, res) => {
//   res.write("<h1>Just a Home Page<h1>");
//   res.write("<h1>Just a Home Page part 2<h1>");
  res.send([
    {
      id: 9211,
      quote: "sucess",
    },
  ]);
});
app.get("/about", (req, res) => {
  res.send("Just a About Page");
});
app.get("/contact", (req, res) => {
  res.status(200).send("Just a Contact Page");
});
app.get("/temp", (req, res) => {
  res.status(200).send("Just a Temperature Page");
});

app.listen(8000, () => {
  console.log("listening");
});
