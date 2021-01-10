const express = require('express')

const server = express()

const PORT = 3000

server.use(express.static('public'))
server.use(express.urlencoded({ extended: true }))

server.get('/compliment', (req, res) => {
    res.send('<h1>Kia Ora</h1>')
})

server.get('/profile', (req, res) => {
    if (req.query.name === 'sampson') {
        res.sendFile(__dirname + '/sampson.html')
    } else if (req.query.name === 'silvia') {
        res.sendFile(__dirname + '/silvia.html')
    }
})

server.get('/profiles/:id', (req, res) => {
    if (req.params.id === '1') {
        res.sendFile(__dirname + '/silvia.html')
    } else if (req.params.id === '2') {
        res.sendFile(__dirname + '/sampson.html')
    }
})

server.post('/named-compliment', (req, res) => {
    res.send('You look nice ' + req.body.name)
})

module.exports = server
