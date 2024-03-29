var express = require("express");
const mongoose = require("mongoose");

var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./data/db")();
const universityService = require("./services/university.service.server")(app);

app.get("/", (req, res) => res.send("hello"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
