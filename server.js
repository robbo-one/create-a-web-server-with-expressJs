const express = require('express')
const server = express()

module.exports = server


server.get('/compliment', (req, res) => {
  res.send('Nice hair!')
})

server.get('/profile', (req, res) => {
  res.sendFile(__dirname + '/silvia.html')
})