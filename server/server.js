const express = require('express')
const server = express()
const port = process.env.PORT || 3000

server.use('/', express.static('./public', {index: "index.html"}))

server.listen(port, () => console.log(`Server started, listening on port ${port}!`))
