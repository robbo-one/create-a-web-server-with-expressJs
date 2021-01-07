const express = require("express");

const server = express();

// Question 1 - Give a compliment
server.get("/compliment", (request, response) => {
  response.send("You have beautiful eyes");
});

//Question 2 - Silvia's profile
server.get("/profile", (request, response) => {
  response.sendFile(__dirname + "/silvia.html");
});

module.exports = server;
