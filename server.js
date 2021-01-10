const express = require('express')
const server = express()


module.exports = server

server.get('/',(req,res) => {
   res.send("hi hi")
})

server.get('/compliment',(req,res) => {
  res.send("<h1><i>Nice face</i></h1>")
})


