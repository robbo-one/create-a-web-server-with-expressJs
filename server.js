const express = require('express')
const server = express()

module.exports = server

server.get('/compliment', (req, res) => {
  res.send('Nice hair!')
})

server.get('/profile', (req, res) => {
  if(req.query.name == "silvia"){
    res.sendFile(__dirname + '/silvia.html')
  } else if(req.query.name == "sampson"){
    res.sendFile(__dirname + '/sampson.html')
  }
})


server.get('/profiles/:id', (req, res) => {
  if(req.params.id == 1){
    res.sendFile(__dirname + '/silvia.html')
  }
  else if (req.params.id == 2){
    res.sendFile(__dirname + '/sampson.html')
  }
})

server.use(express.static('public'))

