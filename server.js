const express = require("express");

const server = express();

// Middleware
server.use(express.static("public"));
server.use(express.urlencoded({ extended: true }));

//
server.post("/named-compliment", (request, response) => {
  response.send(request.body.name + " you have a nice smile");
});

// Give a compliment
server.get("/compliment", (request, response) => {
  response.send("You have beautiful eyes");
});

// Profile query
server.get("/profile", (request, response) => {
  if (request.query.name === "silvia") {
    response.sendFile(__dirname + "/silvia.html");
  } else if (request.query.name === "sampson") {
    response.sendFile(__dirname + "/sampson.html");
  }
});

// Profiles parameters
server.get("/profiles/:id", (request, response) => {
  if (request.params.id == 1) {
    response.sendFile(__dirname + "/silvia.html");
  } else if (request.params.id == 2) {
    response.sendFile(__dirname + "/sampson.html");
  }
});

module.exports = server;
