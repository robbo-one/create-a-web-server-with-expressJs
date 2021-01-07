const { response } = require('express')
const server = require('./server')

const port = process.env.PORT || 3000

server.get('/', (request, response) => {
  response.send('Hello')
})

server.get("/compliment", (req, res) => {
  res.send('nice hair dude(non gender specific dude)')
})







































server.listen(port, function () {
  // eslint-disable-next-line no-console
  console.log('Server listening on port:', port)
})
