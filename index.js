const { response } = require('express')
const server = require('./server')

const port = process.env.PORT || 3000

server.get('/', (request, response) => {
  response.send('Hello')
})

server.get("/compliment", (req, res) => {
  res.send('nice hair dude(non gender specific dude)')
})

server.get('/profile/', (req, res) => {
  if (req.query.name === 'silvia') {
    res.sendFile(__dirname + '/silvia.html')
  } 
  if (req.query.name === 'sampson') {
    res.sendFile(__dirname + '/sampson.html')
  } 
})

server.get('/profiles/:id', (req, res) => {
  if (req.params.id === '1') {
    res.sendFile(__dirname + '/silvia.html')
  } 
  if (req.params.id === '2') {
    res.sendFile(__dirname + '/sampson.html')
  } 
  console.log(req.params.id)
})

// server.get('/profile/', (req, res) => {
//   res.sendFile(__dirname + '/sampson.html')
// })







































server.listen(port, function () {
  // eslint-disable-next-line no-console
  console.log('Server listening on port:', port)
})
