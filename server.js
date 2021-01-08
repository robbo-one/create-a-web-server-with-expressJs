const express = require("express");

const server = express();

// Give a compliment
server.get("/compliment", (request, response) => {
  response.send("You have beautiful eyes");
});

// profiles
// server.get("/profile", (request, response) => {
//   if (request.query.name === "silvia") {
//     response.sendFile(__dirname + "/silvia.html");
//   } else if (request.query.name === "sampson") {
//     response.sendFile(__dirname + "/sampson.html");
//   }
// });

server.get("/profiles/:id", (request, response) => {
  if (request.params.id == 1) {
    response.sendFile(__dirname + "/silvia.html");
  } else if (request.params.id == 2) {
    response.sendFile(__dirname + "/sampson.html");
  }
});

server.use(express.static("public"));

module.exports = server;
