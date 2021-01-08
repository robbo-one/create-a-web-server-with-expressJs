const express = require('express')

const server = express()

//routes

server.get('/compliment', (req, res) => {
    res.send('<h2>hi, you look cute and snuggly</h2>')
})

module.exports = server
