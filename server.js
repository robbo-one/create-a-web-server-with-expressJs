const express = require("express");

const server = express();



server.get('/compliment', (request, response) => {
  response.send("You have beautiful eyes");
});





module.exports = server;