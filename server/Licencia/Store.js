const axios = require('axios')
const express = require('express')
const server = express()

server.use(express.json())

server.post('/:version', async (request, response) => {
  const { version } = request.params
  if (version) {
    const { data } = await axios.post('http://localhost:6000/sac-cloud/licencia/store/' + version, request.body)
    response.send(data)
  } else {
    response.sendStatus(400)
  }
})

module.exports = server
