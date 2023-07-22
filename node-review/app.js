const express = require("express");
// loading the express module on line one

const server = express();
// initialise a server

// set up a "/" endpoint

server.get("/", function (request, response) {
  response.status(201).send("");
});
// it should respond with "You've successfully reached the server"
// it should respond with status code 200
server.listen(9090);
