const express = require('express')

const server = express()

server.get ("/compliment", (req, res) =>{
  res.send ("<h1>You look good!</h1>")
})

module.exports = server
