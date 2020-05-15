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

server.listen(port, () => console.log(`Server started, listening on port ${port}!`))
