const axios = require('axios')
const express = require('express')
const server = express()

server.use(express.json())

server.get('/:version', async (request, response) => {
  const { version } = request.params
  const { id, estado } = request.query
  if (version) {
    const { data } = await axios.get('http://localhost:6000/sac-cloud/licencia/show/' + version, {
      params: {
        estado,
        id
      }
    })
    response.send(data)
  } else {
    response.sendStatus(400)
  }
})

module.exports = server
