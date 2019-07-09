var express = require("express");
var app = express();
var http = require("http").Server(app);
var ejs = require("ejs");
var favicon = require('serve-favicon');
//var index = require("./routes/index");
app.use(favicon(__dirname + '/public/favicon.png'));
app.use(express.static(__dirname + '/public'));
app.set("view engine", "ejs");
//get router for index page
app.get("/", function(req, res, next) {
  res.render("index", { page: "Home", menuId: "home" });
});

// app.get("/", (req, res) => {
//   res.json({
//     message: "I am also reading"
//   });
// });

app.listen("1992", () => {
  console.log("connected to 1992 port");
});


// var scrollToElement = require('scroll-to-element');
// //scrollToElement('#workdetail');
 
// // with options
// scrollToElement('.workdetails', {
//     offset: 0,
//     ease: 'out-bounce',
//     duration: 1500
// });