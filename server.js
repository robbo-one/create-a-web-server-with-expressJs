const express = require('express')

const server = express()

server.get ("/compliment", (req, res) =>{
  res.send ("<h1>You look good!</h1>")
})

server.get ("/profile", (req, res) =>{
  if(req.query.name === "sampson") {
    res.sendFile(__dirname + '/sampson.html')
  } else if(req.query.name === "silvia") {
    res.sendFile(__dirname + '/silvia.html')
  }

})

server.get ("/profiles/:id", (req, res) =>{
  if(req.params.id === "1") {
    res.sendFile(__dirname + '/silvia.html')
  } else if(req.params.id === "2") {
    res.sendFile(__dirname + '/sampson.html')
  }

})

module.exports = server
