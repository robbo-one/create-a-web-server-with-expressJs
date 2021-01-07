const express = require("express");

const server = express();

server.use(express.static("public"));

server.use(express.urlencoded({Name : "get-name.html"})) 

server.get("/compliment", (req, res) => {
  res.send("<h1>You look good!</h1>");
});

server.get("/profile", (req, res) => {
  if (req.query.name === "sampson") {
    res.sendFile(__dirname + "/sampson.html");
  } 
  else if (req.query.name === "silvia") {
    res.sendFile(__dirname + "/silvia.html");
  }
});

server.get("/profiles/:id", (req, res) => {
  if (req.params.id === "1") {
    res.sendFile(__dirname + "/silvia.html");
  } 
  else if (req.params.id === "2") {
    res.sendFile(__dirname + "/sampson.html");
  }
});

server.get("/named-compliment", (req, res) => {
  res.send(Name + "<h2>compliment wrapped in HTML markup<h2>")
  
});



module.exports = server;
