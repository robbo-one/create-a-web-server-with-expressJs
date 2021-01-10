const express = require('express')
const server = express()

module.exports = server

//urlencoded middleware
server.use(express.urlencoded({
  extended: true
}))

//access to public folder in project
server.use(express.static('public'))

//first page for test
server.get('/', (req, res) => {
  res.send("hi hi")
})

//You have a very
server.get('/compliment', (req, res) => {
  res.send("<h1><i>Nice face</i></h1>")
})

//Route using a query (?)
server.get('/profile', (req, res) => {
  if (req.query.name == 'silvia') {
    res.sendFile(__dirname + '/public/silvia.html')
  } else if (req.query.name == 'sampson') {
    res.sendFile(__dirname + '/public/sampson.html')
  }
})

//Route using a parameter (:)
server.get('/profiles/:id', (req, res) => {
  if (req.params.id == 1) {
    res.sendFile(__dirname + '/public/silvia.html')
  } else if (req.params.id == 2) {
    res.sendFile(__dirname + '/public/sampson.html')
  }
})

//Get name, give compliment Route
server.post('/named-compliment', (req,res) => {
  res.send('You are a wonderful person ' + req.body.name + ' :)')
}) 