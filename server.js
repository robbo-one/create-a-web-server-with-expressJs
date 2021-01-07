const express = require('express')

const server = express()

const PORT = 3000

server.get('/compliment', (req, res) => {
    res.send('<h1>Hello</h1><p>World</p>')
})

server.get('/profile', (req, res) => {
    res.sendFile(__dirname + '/silvia.html')
})

module.exports = server

