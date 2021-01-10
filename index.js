const { response } = require('./server')
const server = require('./server')




const PORT = process.env.PORT || 3000




// STARTING THE SERVER
server.listen(PORT, function () {
  // eslint-disable-next-line no-console
  console.log('Server listening on PORT', PORT)
})
