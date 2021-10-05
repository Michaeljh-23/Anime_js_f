const express = require("express");

const morgan = require("morgan");

let app = express();

var router = require('./routes.js');

app.use(express.json());

app.use(express.static(__dirname + "/../dist"));

app.use(morgan("dev"));


const port = 4000;

app.listen(port, function () {
  console.log(`Moving and groving on port ${port}`);
});
