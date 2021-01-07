 
const express = require('express')

const server = express()

module.exports = server

server.get('/', (request, response) => {
  response.send('hi')
})

server.get('/profile', (request, response) => {
  response.sendFile(__dirname + '/silvia.html')
})