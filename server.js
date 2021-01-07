const express = require('express')

const server = express()
const port = 3000


module.exports = server

//Routes
//http://localhost:3000/compliment
server.get('/compliment', (request, response) => {
  response.send('<h1>Hello there!</h1>')
})

//Routes
//http://localhost:3000/profile
server.get('/profile', (request, response) => {
  response.sendFile(__dirname + '/silvia.html')
})