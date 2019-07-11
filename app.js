var express = require("express");
var app = express();
var http = require("http").Server(app);
var ejs = require("ejs");
//var favicon = require('serve-favicon');
//var index = require("./routes/index");
//app.use(favicon(__dirname + '/public/favicon.png'));
app.use(express.static(__dirname + '/public'));
app.set("view engine", "ejs");
//get router for index page
app.get("/", function(req, res, next) {
  res.render("index", { title: "Test Site"});
});

const port = process.env.PORT || 3001

app.listen(port, () => {
  console.log(`Server running at port `+port);
});