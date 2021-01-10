 
const express = require('express')

const server = express()

module.exports = server

server.get('/', (request, response) => {
  response.send('hi')
})

// server.get('/profile', (request, response) => {
//   response.sendFile(__dirname + '/silvia.html')
// })

server.get('/profiles/1', (req, res) => {
  res.sendFile(__dirname + '/silvia.html')
})

server.get('/profiles/2', (req, res) => {
  res.sendFile(__dirname + '/sampson.html')
})