const express = require('express')
const server = express()

module.exports = server


server.get('/compliment', (req, res) => {
  res.send('Nice hair!')
})

server.get('/profile', (req, res) => {
  console.log(req.query.name)
  if(req.query.name == "silvia"){
    res.sendFile(__dirname + '/silvia.html')
  } else if(req.query.name == "sampson"){
    res.sendFile(__dirname + '/sampson.html')
  }

  
})