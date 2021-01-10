 
const express = require('express')

const server = express()

module.exports = server


//MIDDLEWARE:

server.use(express.static('public'))  //This is making it look in th epublic folder to find the required files.
//when using server.use it's saying here is an 
//extra piece of information to add and use on the server


//ROUTES:

//localhost:3000
server.get('/', (request, response) => {
  response.send('hi')
})

// server.get('/profile', (request, response) => {
//   response.sendFile(__dirname + '/silvia.html')
// })

//localhost:3000/profiles/1    //fromFile
server.get('/profiles/1', (req, res) => {
  res.sendFile(__dirname + '/silvia.html')
})

//localhost:3000/profiles/2
server.get('/profiles/2', (req, res) => {
  res.sendFile(__dirname + '/sampson.html')
})