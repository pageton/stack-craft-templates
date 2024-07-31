const Koa = require('koa')
const Router = require('@koa/router')
const routes = require('./routes')
const logger = require('koa-logger')

const app = new Koa()
const router = new Router()
const port = 3000

// Middleware
app.use(logger())

// Routes
app.use(routes.routes()).use(routes.allowedMethods())

console.log(`Server is running on port ${port}`)

app.listen(port)
