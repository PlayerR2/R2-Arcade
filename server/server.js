const express = require('express')
const server = express()
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const port = process.env.PORT || 3000
const config = require('../webpack.config')
const compiler = webpack(config)

server.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
}))

server.use('/', express.static('./public', {index: "index.html"}))

server.listen(port, () => {
  console.log(`█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█`)
  console.log(`█       \x1b[36mExpress Server is listening on port\x1b[0m ${port}        █`)
  console.log(`█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█`)
})
