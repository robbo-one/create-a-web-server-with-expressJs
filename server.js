const express = require("express");

const server = express();

// Question 1 - Give a compliment
server.get("/compliment", (request, response) => {
  response.send("You have beautiful eyes");
});

//Question 2 - Silvia's profile
server.get("/profile", (request, response) => {
  if (request.query.name === "silvia") {
    response.sendFile(__dirname + "/silvia.html");
  } else if (request.query.name === "sampson") {
    response.sendFile(__dirname + "/sampson.html");
  }
});

module.exports = server;
