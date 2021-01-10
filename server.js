const express = require('express')
const server = express()


server.get('/',(req,res) => {
    console.log("hi hi")
})


module.exports = server
