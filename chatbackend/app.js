var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

/* start */
var app = express();
var http = require("http");
var server = http.createServer(app);
const color = require("colors");
const cors = require("cors");

const io = require("socket.io")(server);
require("./socket/socket")(io);

/* end */

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/users", usersRouter);

module.exports = { app, server };
