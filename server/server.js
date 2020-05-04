const express = require('express')
const server = express()
const port = 3000

server.use('/', express.static('./public', {
  index: "index.html"
}))

server.listen(port, () => console.log(`Server started, listening on port ${port}!`))
