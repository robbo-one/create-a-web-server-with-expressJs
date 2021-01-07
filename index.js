const server = require('./server')

const port = process.env.PORT || 3000
// server.use(express.static('public'))


server.listen(port, function () {
  // eslint-disable-next-line no-console
  console.log('Server listening on port:', port)
})
