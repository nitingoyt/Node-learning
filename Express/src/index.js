// const path = require("path");
// const express = require("express");
// const { get } = require("http");
// const app = express();

// console.log(__dirname);

// const staticPath = path.join(__dirname, "../public");

// app.use(express.static(staticPath)); //static web serving

// app.get("/", (req, res) => {
//   res.send("express working");
// });
// app.get("/about", (req, res) => {
//   res.send("Just a about page");
// });

// app.get("*", (req, res) => {
//   res.render("404", {
//     errorcomment : 'opps not found'
//   });
// });

// app.listen(8000, () => {
//   console.log("listening to port");
// });

const express = require("express");
const path = require("path");
const app = express();
const PORT = 8000;

// middleware

const staticPath = path.join(__dirname, "../public");

// to set view engine0
app.set("view engine", "hbs")


// app.use(express.static(staticPath));

// template engine
app.get("", (req, res)=>{
  res.render('index')
})

app.get('/about', (req, res)=>{
  res.render('about')
})

app.get("/", (req, res) => {
  res.send("hello from server");
});

app.listen(PORT, () => {
  console.log("listening to port");
});
