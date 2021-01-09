const express = require('express')

const server = express()

//middleware

server.use(express.static('public'))
server.use(express.urlencoded({extended:false}));

//routes

server.get('/compliment', (req, res) => {
    res.send('<h1>hi, <em>your hair looks good in blue</em></h3>')
})

server.get('/profile', (req, res) => {
    if (req.query.name === 'silvia') {
        res.sendFile(__dirname + '/public/silvia.html')
    }
    if (req.query.name === 'sampson') {
        res.sendFile(__dirname + '/public/sampson.html')
    }
})

server.get("/profiles/:id", (req, res) => {
    if (req.params.id === '1') {
        res.sendFile(__dirname + '/public/silvia.html')
    }
    if(req.params.id === '2') {
        res.sendFile(__dirname + '/public/sampson.html')
    }
})

server.get("/get-name", (req, res) => {
    res.sendFile(__dirname + '/public/get-name.html')
})

server.post("/named-compliment", (req, res) => {
    console.log(req.body)
    res.send(":) hi " + req.body.name + " you looking swell today")
})



module.exports = server
