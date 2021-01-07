const express = require('express')

const server = express()

server.get ("/compliment", (req, res) =>{
  res.send ("<h1>You look good!</h1>")
})

server.get ("/profile", (req, res) =>{
  res.sendFile(__dirname + '/silvia.html')

})

module.exports = server
