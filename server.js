const express = require('express')

const server = express()

const PORT = 3000

server.get('/compliment', (req, res) => {
    res.send('<h1>Hello</h1><p>World</p>')
})

server.get('/profile', (req, res) => {
    if (req.query.name === 'sampson') {
        res.sendFile(__dirname + '/sampson.html')
    } else if (req.query.name === 'silvia') {
        res.sendFile(__dirname + '/silvia.html')
    }
    console.log(req.query.name)
})

server.get('/profiles', (req, res) => {
    if (req.params.id === 'sampson') {
        res.sendFile(__dirname + '/sampson.html')
    } else if (req.params.id === 'silvia') {
        res.sendFile(__dirname + '/silvia.html')
    }
    console.log(req.params.id)

})

module.exports = server

