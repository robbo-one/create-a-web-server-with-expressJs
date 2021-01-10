const server = require('./server')
const PORT = process.env.PORT || 3000

//starting the server
server.listen(PORT,() => {
  console.log('Server listening on port:', PORT)
})
