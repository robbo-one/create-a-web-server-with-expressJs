const express = require('express')
const server = express()


server.use(express.static('public'))
server.use(express.urlencoded({extended:false}));


server.get('/compliment', (req, res) => {
  res.send('Nice hair!')
})

server.get('/profile', (req, res) => {
  if(req.query.name == "silvia"){
    res.sendFile(__dirname + '/silvia.html')
  } else if(req.query.name == "sampson"){
    res.sendFile(__dirname + '/sampson.html')
  }
})

server.get('/profiles/:id', (req, res) => {
  if(req.params.id == 1){
    res.sendFile(__dirname + '/silvia.html')
  }
  else if (req.params.id == 2){
    res.sendFile(__dirname + '/sampson.html')
  }
})

server.get("/get-name", (req, res) => {
  res.sendFile(__dirname + '/public/get-name.html')
})

server.post('/named-compliment', (req,res) => {

res.send("Hey " + req.body.name + " you have lovely knees")
})



module.exports = server
